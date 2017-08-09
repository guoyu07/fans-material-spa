/*
|--------------------------------------------------------
| Fans SPA webpack 配置文件.
|--------------------------------------------------------
|
| 配置文件使用 ES6 语法配置，这样能保证整个文档项目的语法统一性
| 修改配置文件请使用 ES6 语法对 webpack 进行配置。
|
| @author Seven Du <shiweidu@outlook.com>
|
*/

import path from 'path';
import webpack from 'webpack';
import WebpackLaravelMixManifest from 'webpack-laravel-mix-manifest';

// 环境变量获取
const NODE_ENV = process.env.NODE_ENV || 'development';
const isHot = process.argv.includes('--hot');
const isProd = NODE_ENV === 'production';
const ASSET_PATH = process.env.ASSET_PATH || '/';

// 输入输出路径。
const src = (...paths) => path.resolve(...[__dirname, 'src', ...paths]);
const asstes = (...paths) => path.join(...[__dirname, 'asstes', ...paths]);

const webpackConfig = {
  devtool: isProd ? false : 'source-map',
  entry: {
    app: src('main.js')
  },
  output: {
    path: asstes(),
    filename: '[name].js',
    publicPath: ASSET_PATH
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [ src(), path.resolve(__dirname, 'node_modules') ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [ src() ],
        use: [ 'babel-loader' ]
      }
    ]
  },
  plugins: [
    // Defined build env.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new WebpackLaravelMixManifest(),
  ]
};

export default webpackConfig;
