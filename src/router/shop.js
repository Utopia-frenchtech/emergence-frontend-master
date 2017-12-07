import Categories from '@/components/shop/Categories'
import ItemsList from '@/components/shop/ItemsList'
import Item from '@/components/shop/Item'
import ThanksMessage from '@/components/shop/ThanksMessage'

const shopRoutes = [
  {
    name: 'Shop',
    path: '',
    component: Categories
  }, {
    name: 'ShopCategory',
    path: 'category/:categoryId',
    component: ItemsList,
    props: (route) => ({categoryId: route.params.categoryId})
  }, {
    name: 'ShopItem',
    path: 'item/:itemId',
    component: Item,
    props: (route) => ({itemId: route.params.itemId})
  }, {
    name: 'ShopThanksMessage',
    path: 'thanks',
    component: ThanksMessage,
    props: (route) => ({itemId: route.query.itemId, categoryId: route.query.categoryId})
  }
]

export default shopRoutes
