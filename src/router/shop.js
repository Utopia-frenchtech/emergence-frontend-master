import Categories from '@/components/shop/Categories'
import ItemsList from '@/components/shop/ItemsList'
import Item from '@/components/shop/Item'

const shopRoutes = [
  {
    name: 'Shop',
    path: '',
    component: Categories
  }, {
    name: 'ShopCategory',
    path: 'category/:categoryId',
    component: ItemsList
  }, {
    name: 'ShopItem',
    path: 'item/:itemId',
    component: Item
  }
]

export default shopRoutes
