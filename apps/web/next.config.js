/** @type {import('next').NextConfig} */
const { patchWebpackConfig } = require('next-global-css')
const webpackNodeExternals = require('webpack-node-externals')


const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        patchWebpackConfig(config, options)

        // TODO: Probably I don't need it, but it breaks middleware and other stuff
        // if (options.isServer) {
        //     config.externals = webpackNodeExternals({
        //         // Uses list to add this modules for server bundle and process.
        //         allowlist: [/design-system/],
        //     })
        // }

        return config
    },
    // experimental: {
    //     swcPlugins: [
    //         [
    //             'next-superjson-plugin',
    //             {
    //                 excluded: [],
    //             },
    //         ],
    //     ],
    // }
}

module.exports = nextConfig
