const withLess = require('@zeit/next-less')
const withImages = require('next-images')

/**
 * next的配置文件，支持配置嵌套
 */
module.exports = withImages(withLess({
  webpack(config, options) {
    // if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
    config['module']['rules'].push({
      test: /\.less$/,
      use: [
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true,
          }
        }
      ]
    });
    return config
  }
}));