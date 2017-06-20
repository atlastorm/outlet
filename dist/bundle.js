'use strict';

/**
 * Created by fanjingjian on 2017/6/20.
 */

var A = (() => {
    const name = 'test';
    return {
        getName: () => {
            return name;
        }
    };
});

var version = "0.0.0";

/**
 * Created by fanjingjian on 2017/6/20.
 */

var index = (() => {
    const a = new A();
    const name$$1 = a.getName();
    console.log('A:', name$$1);
    console.log('version:', version);
});

module.exports = index;
