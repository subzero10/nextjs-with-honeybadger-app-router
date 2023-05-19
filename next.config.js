const { setupHoneybadger } = require('./honeybadger.setup')

const moduleExports = {
    // ... Your existing module.exports object goes here
}

// Showing default values
const honeybadgerNextJsConfig = {
    disableSourceMapUpload: false,
    silent: false,
    webpackPluginOptions: {
        apiKey: process.env.NEXT_PUBLIC_HONEYBADGER_API_KEY,
        assetsUrl: process.env.NEXT_PUBLIC_HONEYBADGER_ASSETS_URL,
        revision: process.env.NEXT_PUBLIC_HONEYBADGER_REVISION,
    }
}

module.exports = setupHoneybadger(moduleExports, honeybadgerNextJsConfig)
