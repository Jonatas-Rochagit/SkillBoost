module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve?.fallback,
      process: require.resolve('process/browser'),
      zlib: false,
      stream: false,
      util: false,
      buffer: false,
      asset: false,
    },
  };

  return config;
};