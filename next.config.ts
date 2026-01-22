import type { NextConfig } from "next";

// Source - https://stackoverflow.com/a
// Posted by li Anna
// Retrieved 2026-01-22, License - CC BY-SA 4.0

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**'
            }
        ]
    }
};

module.exports = nextConfig;
