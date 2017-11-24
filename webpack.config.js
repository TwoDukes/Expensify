const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader', //run babel
        test: /\.js$/, //on all js files
        exclude: /node_modules/ //except the ones in node modules
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          'use': [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    devtool: isProduction ? 'source-map' :'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }, 
    plugins: [
      new DashboardPlugin(),
      CSSExtract
    ]
  };
  
};
