/**
 * Created by shenlisha on 2019/5/28.
 */
module.exports = function(source) {
    console.log('html-loader', source);
    return 'module.exports = ' + JSON.stringify(source);
};