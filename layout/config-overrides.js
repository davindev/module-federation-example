const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack: (config) => {
    return {
      ...config,
      entry: './src/index',
      mode: 'development',
      output: {
        path: path.resolve(__dirname, 'build'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new ModuleFederationPlugin({
          name: 'layout',
          filename: 'remoteEntry.js',
          exposes: {
            './Header': './src/components/Header',
            './Footer': './src/components/Footer',
          },
          shared: {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: '^18.2.0',
            },
          },
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
      port: 3000,
      host: 'localhost',
      static: {
        directory: path.resolve(__dirname, 'build'),
      },
    });
  },
};
