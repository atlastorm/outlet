/**
 * Created by fanjingjian on 2017/6/20.
 */

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const npm = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const defaultConfig = require('./rollup.config');

console.log('defaultConfig', defaultConfig)
rollup.rollup(defaultConfig).then(function(bundle) {
   console.log('success!', bundle)
}).catch(function(err){
    console.log(err);
});