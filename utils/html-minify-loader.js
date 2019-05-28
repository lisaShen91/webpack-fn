/**
 * Created by shenlisha on 2019/5/28.
 */
var loaderUtils = require('loader-utils');
var Minimize = require('minimize');
// loader 可以是同步的也可以是异步的
//最后一个loader要输出 'module.exports = ' + JSON.stringify(source);

module.exports = function (source) {
    //异步调用
    var cb = this.async();
    source = source.replace(/\{\{ (name) \}\}/, 'lisa');
    source = source.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    var options = loaderUtils.getOptions(this) || {}; //这里拿到 webpack.config.js 的 loader 配置
    console.log(options);
    var minimize = new Minimize(options);
    cb(null, minimize.parse(source));
    return minimize.parse(source)
};

