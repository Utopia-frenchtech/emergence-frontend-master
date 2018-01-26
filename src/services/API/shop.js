/**
 * Requests related to the interface gamification, experience for example
 */
import fakeData from '@/helpers/fakeData'
import store from '@/config/vuex/store'

export const shop = {
  getCategories: () => {
    return new Promise((resolve, reject) => {
      resolve(Array(6).fill().map(fakeData.shop.category))
    })
  },
  getCategory: (categoryId) => new Promise((resolve, reject) => {
    resolve(fakeData.shop.category())
  }),
  getItems: (categoryId) => new Promise((resolve, reject) => {
    resolve(Array(12).fill().map(fakeData.shop.item))
  }),
  getItem: (itemId) => new Promise((resolve, reject) => {
    resolve(fakeData.shop.item())
  }),
  addItem: (item) => new Promise((resolve, reject) => {
    resolve()
  }),
  removeItem: (item) => new Promise((resolve, reject) => {
    resolve()
  }),
  emptyCart: () => new Promise((resolve, reject) => {
    resolve()
  }),
  getCartItems: () => new Promise((resolve, reject) => {
    resolve(Array(12).fill().map(fakeData.shop.item))
  })
}

export default shop
