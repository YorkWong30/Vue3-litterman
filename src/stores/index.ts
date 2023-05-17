import { defineStore } from 'pinia'
import Names from './store-name'
const login = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('login Ok')
    }, 2000)
  })
}
export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: 'littleMan',
      tip: 'oral tip'
    }
  },
  // computed
  getters: {
    getterTip(): string {
      return `${this.tip}NNNNNN`
    }
  },
  //methods 支持同步和异步 提交state
  actions: {
    //不使用箭头函数，否之this无效
    setCurrent(value: number) {
      this.current = value
    },
    async setLogin() {
      this.tip = await login()
    }
  }
})
