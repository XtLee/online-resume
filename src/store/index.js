import Vuex from 'vuex'
import Vue from 'vue'
import { stat } from 'fs';
import objectPath from 'object-path';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {id: '', username: ''},
    resume: {
      config: [
        {field: 'profile', icon: 'shenfenzheng'},
        {field: 'work', icon: 'bag'},
        {field: 'education', icon: 'book'},
        {field: 'projects', icon: 'project'},
        {field: 'awards', icon: 'icongroup05'},
        {field: 'contacts', icon: 'phone'}
      ],
      profile: {
        name: '王兰花秀丽',
        city: '加里顿',
        title: '前端'
      },
      work: [
        {company: 'B', time: '2001-2002', content: '我的第一份工作是'},
        {company: 'A', time: '2002-2003', content: '我的第二份工作是'},
        {company: 'T', time: '2003-2004',  content: '我的第三份工作是'}
      ],
      education: [
        {school: 'T', duration: '2000-2001', degree: '恶魔喵喵喵喵...'},
        {school: 'A', duration: '2000-2001', degree: '恶魔喵喵喵喵...'}
      ],
      projects: [
        {name: 'project A', content: '我做了嗯嗯啊啊'},
        {name: 'project B', content: '我又做了嗯嗯啊啊'}
      ],
      awards: [
        {name: 'award A', content: '哈哈哈哈哈'},
        {name: 'award B', content: '又哈哈哈哈哈'}
      ],
      contacts: {
        phone: '12345698765',
        mail: '123456789@gmail.com',
        blog: '123456@github.com'
      }
    }
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    initState(state, payload) {
      Object.assign(state, payload)
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
    },
    removeUser(state) {
      state.user.id = ''
    },
    addItem(state, path) {
      let items = objectPath.get(state.resume, path)
      let empty = {}
      for(let i=0;i<items.length;i++) {
        for(let key in items[i]) {
          empty[key] = ''
        }
      }
      items.push(empty)
      objectPath.set(items, path)
    },
    removeItem(state, {path, index}) {
      let items = objectPath.get(state.resume, path)
      items.splice(index, 1)
      objectPath.set(items, path)
    }
  }
})
