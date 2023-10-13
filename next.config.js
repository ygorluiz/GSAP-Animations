/** @type {import('next').NextConfig} */
const nextConfig = {
    build: {
        transpile: ["gsap"],
    },
    distDir: '.build'
};

module.exports = nextConfig;
