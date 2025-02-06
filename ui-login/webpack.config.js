const path = require('path')
const webpackMerge = require('webpack-merge').merge
const singleSpaDefaults = require('webpack-config-single-spa-react')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].css',
    ignoreOrder: false,
  }),
]

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'redbee',
    projectName: 'login',
    webpackConfigEnv,
  })

  return webpackMerge(defaultConfig, {
    entry: './src/redbee-login.tsx',
    output: {
      //filename: 'redbee-seed.js',
      filename: 'redbee-login.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.html/,
          loader: 'html-loader',
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'fonts/[name].[ext]',
                url: false,
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins,
  })
}
