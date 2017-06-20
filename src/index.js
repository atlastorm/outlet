/**
 * Created by fanjingjian on 2017/6/20.
 */

import A from './components/index.js';

import { version } from "../package.json";


export default () => {
    const a = new A()
    const name = a.getName();
    console.log('A:', name);
    console.log('version:', version);
}