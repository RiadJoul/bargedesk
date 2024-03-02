/** @type {import('next').NextConfig} */
import pkg from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: true,
  i18n: pkg.i18n,
};

export default nextConfig;