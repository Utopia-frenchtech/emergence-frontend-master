import Categories from '@/components/shop/Categories'
import ItemsList from '@/components/shop/ItemsList'
import Item from '@/components/shop/Item'
import ThanksMessage from '@/components/shop/ThanksMessage'
import TopBar from '@/components/shop/TopBar'

const shopRoutes = [
  {
    name: 'Shop',
    path: '',
    components: {
      content: Categories,
      top: TopBar
    },
    props: {
      top: (route) => ({title: 'BARFOO'})
    }
  }, {
    name: 'ShopCategory',
    path: 'category/:categoryId',
    components: {
      top: TopBar,
      content: ItemsList
    },
    props: {
      content: (route) => ({ categoryId: route.params.categoryId }),
      top: (route) => ({ title: 'FOOBAR' })
    }
  }, {
    name: 'ShopItem',
    path: 'item/:itemId',
    components: {
      top: TopBar,
      content: Item
    },
    props: {
      content: (route) => ({ itemId: route.params.itemId }),
      top: (route) => ({ title: 'FOOBAR' })
    }
  }, {
    name: 'ShopThanksMessage',
    path: 'thanks',
    components: {
      top: TopBar,
      content: ThanksMessage
    },
    props: {
      content: (route) => ({ itemId: route.query.itemId, categoryId: route.query.categoryId }),
      top: (route) => ({ title: 'FOOBAR' })
    }
  }
]

export default shopRoutes
