import { renderPage } from 'vite-plugin-ssr/server';
import jwt_decode from 'jwt-decode';
import initPageContext from './init-page-context';
import tiConfig from 'tiConfig';

export { handleSsr };

const bufferToHex = buffer => {
  const view = new DataView(buffer);

  let hexCodes = '';
  for (let index = 0; index < view.byteLength; index += 4) {
    hexCodes += view.getUint32(index).toString(16).padStart(8, '0');
  }

  return hexCodes;
};

const create =
  algorithm =>
  async (buffer, { outputFormat = 'hex' } = {}) => {
    if (typeof buffer === 'string') {
      buffer = new globalThis.TextEncoder().encode(buffer);
    }

    const hash = await globalThis.crypto.subtle.digest(algorithm, buffer);

    return outputFormat === 'hex' ? bufferToHex(hash) : hash;
  };

const sha256 = create('SHA-256');

async function handleSsr(url, authToken = null, userAndAppearanceToken = null) {
  const tiInstance = findTiInstance(INSTANCE_NAME);
  const { currentUser, appearanceBlock } = decryptUserAndAppearance(
    userAndAppearanceToken,
    tiInstance
  );
  const pageContext = await initPageContext(
    url,
    renderPage,
    currentUser,
    appearanceBlock,
    HELIUM_ENDPOINT,
    true,
    sha256,
    authToken
  );

  const { httpResponse, redirectTo } = pageContext;

  if (redirectTo) {
    return Response.redirect(redirectTo, 302);
  }

  if (!httpResponse) {
    return null;
  } else {
    const { statusCode, body } = httpResponse;
    const headers = assembleHeaders(pageContext);

    return new Response(body, {
      headers,
      status: statusCode
    });
  }
}

function decryptUserAndAppearance(userAndAppearanceToken, tiInstance) {
  let currentUser = {};
  let appearanceBlock = {};

  if (userAndAppearanceToken && tiInstance && tiInstance.apiKey) {
    const decryptedJWT = jwt_decode(userAndAppearanceToken);

    if (decryptedJWT) {
      if (decryptedJWT.currentUser) {
        currentUser = decryptedJWT.currentUser;
      }

      if (decryptedJWT.appearanceBlock) {
        appearanceBlock = decryptedJWT.appearanceBlock;
      }
    }
  }

  return { currentUser, appearanceBlock };
}

function assembleHeaders(pageContext) {
  const headers = { 'content-type': 'text/html' };

  if (pageContext && pageContext.documentProps) {
    for (const key of Object.keys(pageContext.documentProps)) {
      headers[`-x-page-${key}`] = pageContext.documentProps[key];
    }
  }

  return headers;
}

function findTiInstance(instanceName) {
  const { instances = [] } = tiConfig;
  let instance = instances[0];

  if (instanceName) {
    const possibleMatch = instances.find(instance => instance.nickname === instanceName);
    if (possibleMatch && possibleMatch.apiKey) {
      instance = possibleMatch;
    }
  }

  return instance;
}
