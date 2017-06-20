/**
 * Created by fanjingjian on 2017/6/20.
 */

import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
    // 指定入口文件，即我们要打包成bundle.js的源文件
    entry: './src/index.js',

    // 指定要打包成什么格式，等同： rollup src/main.js -o bundle.js -f cjs中的'-f cjs'参数
    // （-f cjs = commonJS, amd = AMD, …）
    format: 'cjs',

    // 以数组形式出现，且数组成员使用小括号，比如：[ json(), a(), b() ...]
    plugins: [
        json(),
        babel(),
    ],

    // 最后是指定输出文件，yarn即命令中的'-o bundle.js'参数
    dest: './dist/bundle.js'
}