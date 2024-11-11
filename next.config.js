/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { dev, isServer }) => {
        // Webpack 5 polyfill voor punycode
        config.resolve.fallback = {
            ...config.resolve.fallback,
            punycode: false
        };

        // Disable cache in development
        if (dev) {
            config.cache = false;
        }

        return config;
    },
    experimental: {
        // Disable webpack cache
        optimizeFonts: false,
        enableUndici: true
    }
}

module.exports = nextConfig