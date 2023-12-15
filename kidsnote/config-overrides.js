const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack: (config) => {
    return {
      ...config,
      entry: './src/index.tsx',
      mode: 'development',
      output: {
        path: path.resolve(__dirname, 'build'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new ModuleFederationPlugin({
          name: 'kidsnote',
          filename: 'remoteEntry.js',
          exposes: {
            './Service': './src/Service',
          }
        }),
      ],
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/i,
            loader: 'ts-loader',
            exclude: ['/node_modules/'],
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
      },
    };
  },
  devServer: (configFunction) => {
    return (proxy, allowedHost) => ({
      ...configFunction(proxy, allowedHost),
      open: true,
      port: 3002,
      host: 'localhost',
      static: {
        directory: path.resolve(__dirname, 'build'),
      },
    });
  },
};
