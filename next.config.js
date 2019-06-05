const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const lessConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};

const cssConfig = {
};

const nextConfig = {
  distDir: 'dist',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    return config;
  }
};

module.exports = withPlugins([[withLess, lessConfig], [withCSS, cssConfig]], nextConfig);
