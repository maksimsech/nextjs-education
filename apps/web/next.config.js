/** @type {import('next').NextConfig} */
// /** @type {import('node:fs')} */
// const fs = require('node:fs')

const {patchWebpackConfig} = require('next-global-css')
// const webpackNodeExternals = require('webpack-node-externals')


const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
        // TODO: Check how it works bcs it looks buggy
        // Also might look better, smth like dir('packages').getFolders().map(f => `@your-spot/${f.name}`)
        // or with package.json
        '@your-spot/contracts',
        '@your-spot/database',
        '@your-spot/api',
        '@your-spot/core',
        '@your-spot/ui',
    ],
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
