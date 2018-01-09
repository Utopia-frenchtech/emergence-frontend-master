export default {
  models: {
    user: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      zipCode: 'Zip Code',
      city: 'City',
      userName: `Username`,
      password: 'Password',
      profileGame: 'Player profile',
      profileDev: 'Developer profile',
      changepassword: 'Password to change',
      uservalides: 'You are not staying or you do not have an active account yet please confirm the information'
    }
  },
  components: {
    'chat': {
      label: 'Chat',
      firstMessage: `Hello, little human. If you wish to discuss, use the form below.`,
      form: {
        label: 'Speak here:',
        button: 'Post',
        name: 'Your first name',
        message: 'Your message'
      }
    },
    'info': {
      'legalTerms': {
        label: 'Terms'
      }
    },
    'level': {
      'level': 'Level'
    },
    user: {
      login: {
        label: 'Login',
        alreadyMember: 'Already member ?',
        button: 'Login'
      },
      account: {
        label: 'My account',
        button: 'Update my data'
      },
      signup: {
        label: 'Signup',
        notYetMember: 'Not member yet?',
        button: 'Signup'
      },
      logout: {
        label: 'Logout',
        message: 'You are now logged out. See you soon!',
        button: 'Logout',
        anotherAccount: 'Login with another account'
      },
      shop: {
        categories: {
          welcome: {
            topbar: 'Emergence IApp Store',
            title: 'Welcome to the Emergence service shop!',
            message: 'New features, new knowledge for your AI!\nPut everything you want in the basket, it does not cost anything, and it makes the Beta progress…'
          }
        },
        thanksMessage: {
          topbar: 'My services list',
          title: 'Thanks for wanting this great feature',
          description: 'Stay informed, check the newsletter.\nThese services are not implemented for Beta :o(\nBut we are working on it :o)\n',
          leave: 'Leave the shop',
          continue: 'Continue shopping'
        },
        cart: {
          topbar: 'My services list',
          cart: 'cart',
          add: 'Add item',
          addToCart: '@:components.shop.add to @:components.shop.cart',
          remove: 'Remove item',
          removeFrom: '@:components.shop.remove from @:components.shop.cart',
          empty: 'Remove all items'
        },
        topbar: {
          close: 'Leave the shop',
          cart: 'Access your @:components.shop.cart.cart'
        }
      }
    },
    links: {
      blogger: 'http://emergencealpha.blogspot.fr/'
    },
    services: {
      api: {
        error: {
          title: 'Oops',
          message: `An error has occured`
        }
      }
    }
  }

}
