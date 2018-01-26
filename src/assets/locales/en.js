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
            uservalides: 'You are not staying or you do not have an active account yet please confirm the information',
            color: 'Favorit color',
            city: 'City',
            veName: 'VE Name',
            fbAccount: 'Facebook Account'
        }
    },
    components: {
        'chat': {
            label: 'Chat',
            firstMessage: `Hello, little human. If you wish to discuss, call my name 3 times with the form.`,
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
                alreadyMember: 'Already member?',
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
