import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types';

Vue.use(Vuex)

// 动态加载modules
const files = require.context('./', true, /index\.js$/);
const modules = files.keys().filter(key => {
  if (key === './index.js') return false;
  return true
}).map(key => {  
  // 获取名字
  const modulePath = key.replace('./modules/', '');
  const moduleName = modulePath.replace('/index.js', '');
  const module = require(`${key}`);

  return {
    [moduleName]: module.default
  }
})

console.log(modules);

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: modules
})

export default store
