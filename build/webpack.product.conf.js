const merge = require('webpack-merge');
const NODE_ENV = process.env.NODE_ENV = 'production';
const webpackBaseConfig = require('./webpack.base.conf')(NODE_ENV);
const webpackConfig = merge(webpackBaseConfig, {

});

module.exports = webpackConfig;
