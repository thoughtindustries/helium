import loadScript from 'load-script';

declare global {
  interface Window {
    [key: string]: any;
  }
}

interface SDKPromise {
  resolve: (sdk: unknown) => void;
  reject: (reason?: any) => void;
}

interface RequestedUrls {
  [key: string]: Array<SDKPromise>;
}

const getGlobal = (key: string) => {
  if (window[key]) {
    return window[key];
  }

  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }

  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }

  return null;
};

const requests = {} as RequestedUrls;
const getSdk = (url: string, sdkGlobal: string) => {
  const existingGlobal = getGlobal(sdkGlobal);

  if (existingGlobal) {
    return Promise.resolve(existingGlobal);
  }

  return new Promise((resolve, reject) => {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({ resolve, reject });
      return;
    }

    requests[url] = [{ resolve, reject }];
    const onLoaded = (sdk: string) => {
      // When loaded, resolve all pending request promises
      requests[url].forEach((request: SDKPromise) => request.resolve(sdk));
    };

    loadScript(url, err => {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // remove the key
        requests[url].forEach((request: SDKPromise) => request.reject(err));
        delete requests[url];
      } else {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
};

export default getSdk;
