const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const build_environment = (process.env.NODE_ENV === "production") ? "production" : "development"
const api_server_url = (process.env.NODE_ENV === "production") ? "https://www.CHANGETHIS.com" : "http://localhost:22280"
const www_server_root_domain = (process.env.NODE_ENV === "production") ? "CHANGETHIS.com" : "localhost"

module.exports = {
  // entry: "./app/index.js",
  entry: {
    // home_page: './src/home_page.js',
    // zone_index_page: './src/zone_index_page.js',
    // login_page: './src/login_page.js',
    simple_react_web_component: './src/simple_react_web_component.js',
    // signup_page: './src/signup_page.js',
    // post_submit_page: './src/post_submit_page.js',
    // post_detail_page: './src/post_detail_page.js',
    // profile_page: './src/profile_page.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, "static_site/js/build"),
    // filename: "bundle.js",
    filename: `[name].${build_environment}.min.js`,
  },
  optimization: { // omits license txt files from being created
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  plugins: [
    new webpack.DefinePlugin({
      __WEBPACK_XXX__: JSON.stringify("OK THIS WORKED"),
      __WEBPACK_BUILD_ENVIRONMENT__: JSON.stringify(build_environment),
      __WEBPACK_API_SERVER_URL__: JSON.stringify(api_server_url),
      __WEBPACK_WWW_SERVER_ROOT_DOMAIN__: JSON.stringify(www_server_root_domain),
    }),
  ],
  mode: build_environment,
};
