// Source - https://stackoverflow.com/a/75929691
// Posted by Adnan Hussain
// Retrieved 2026-02-11, License - CC BY-SA 4.0

const webpack = require('webpack');
module.exports = {
    webpack: (config, { isServer }) => {
        // Add fallback for 'buffer' module
        if (!isServer) {
            config.resolve.fallback = {
                buffer: require.resolve('buffer'),
            };
        }

        return config;
    },
};
