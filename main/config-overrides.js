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
          name: 'main',
          remotes: {
            layout: 'layout@http://localhost:3000/remoteEntry.js',
            kidsnote: 'kidsnote@http://localhost:3002/remoteEntry.js',
          },
          shared: {
            react: {
              eager: true,
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
      port: 3001,
      host: 'localhost',
      static: {
        directory: path.resolve(__dirname, 'build'),
      },
    });
  },
};
