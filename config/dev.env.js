/**
 * @file 开发环境相关配置文件
 * @author shiyuewei(2671523019@qq.com)
 */

'use strict';

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
