const { addWebpackAlias, addWebpackModuleRule, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
  }),
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          url: false,
          // modules: {
          //   auto: false,
          //   localIdentName: '[local]__[hash:base64:5]'

          // },
          modules: false,
          importLoaders: 1
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  })
);