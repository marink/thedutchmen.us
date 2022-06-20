/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "akamai",
        path: "/"
    },
    reactStrictMode: true,
    exportPathMap: async function (
        defaultPathMap,
        {
            dev = "false",
            dir = ".",
            outDir = "/Users/marin/Projects/thedutchmen.us/dist",
            distDir = ".",
            buildId
        }
    ) {
        return {
            '/': { page: '/' },
        }
    },

}

module.exports = nextConfig
