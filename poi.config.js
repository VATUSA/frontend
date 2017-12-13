module.exports = {
    presets: [
        require("poi-preset-react")(), // eslint-disable-line
        require('poi-preset-resolve-alias')({ //eslint-disable-line
            './themes': 'static/themes/', //eslint-disable-line
        }),
    ],
    cssModules: true,
    webpack(config) {
        console.dir(config.resolve.alias);
        return config;
    },
};
