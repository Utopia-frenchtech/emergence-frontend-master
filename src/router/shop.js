import Categories from '@/components/shop/Categories'
import ItemsList from '@/components/shop/ItemsList'

const shopRoutes = [
  {
    name: 'Shop',
    path: '/',
    component: Categories
  }, {
    name: 'ShopCategory',
    path: '/:categoryId',
    component: ItemsList
  }
]

export default shopRoutes
