/**
 * Requests related to the interface gamification, experience for example
 */
import fakeData from '@/helpers/fakeData'
export const shop = {
  getCategories: () => {
    return new Promise((resolve, reject) => {
      resolve(Array(6).fill().map(fakeData.shop.category))
    })
  }
}

export default shop
