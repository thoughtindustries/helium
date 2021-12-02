const instanceEndpoint = instance => {
  const { instanceUrl, apiKey } = instance;
  const base = new URL(instanceUrl);

  base.pathname = 'helium';
  base.searchParams.set('api_key', apiKey);

  return base.href;
};

module.exports = { instanceEndpoint };
