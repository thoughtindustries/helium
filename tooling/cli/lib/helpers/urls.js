const instanceEndpoint = instance => {
  const { instanceUrl, apiKey } = instance;
  const base = new URL(instanceUrl);

  base.pathname = 'helium';
  base.searchParams.set('apiKey', apiKey);

  return base.href;
};

module.exports = { instanceEndpoint };
