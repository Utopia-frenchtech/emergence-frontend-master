export default {
    models: {
        user: {
            firstName: 'Prénom',
            lastName: 'Nom de famille',
            email: 'Email',
            phone: 'Téléphone',
            address: 'Adresse',
            zipCode: 'Code postal',
            city: 'Ville',
            userName: `Nom d'utilisateur`,
            password: 'Mot de passe',
            profileGame: 'Profil joueur',
            profileDev: 'Profil Développeur',
            changepassword: 'Mot de passe bien changé',
            uservalides: 'vous n\'étes pas logé(e) ou vous n\'avez pas encore de compte actif merci de valider les informations',
            color: 'Couleur préférée',
            city: 'Ville',
            veName: 'ma VE',
            fbAccount: 'Mon compte Facebook'
        }
    },
    components: {
        'chat': {
            label: 'Chat',
            firstMessage: `Bonjour, petit humain. Si tu souhaites me contacter, appelle mon nom 3 fois grace au formulaire.`,
            form: {
                label: 'Parle ici:',
                button: 'Poster',
                name: 'Ton prénom',
                message: 'Ton message'
            }
        },
        'info': {
            'legalTerms': {
                label: 'Mentions légales'
            }
        },
        'level': {
            'level': 'Niveau'
        },
        user: {
            login: {
                label: 'Connexion',
                alreadyMember: 'Déja membre ?',
                button: 'Connexion'
            },
            account: {
                label: 'Mon Compte',
                button: 'Mettre à jour les données'
            },
            signup: {
                label: 'Inscription',
                notYetMember: 'Pas encore membre ?',
                button: 'Inscription'
            },
            logout: {
                label: 'Déconnexion',
                message: 'Vous êtes bien déconnecté. A bientôt !',
                button: 'Déconnexion',
                anotherAccount: 'Se connecter avec un autre compte'
            }
        },

        shop: {
            categories: {
                topbar: 'Emergence IApp Store',
                welcome: {
                    title: 'Bienvenue dans le shop de services Emergence !',
                    message: 'De nouvelles fonctionnalités, de nouvelles connaissances pour votre IA !\nMettez tout ce que vous voulez dans le panier,  ça ne coûte rien, et ça fait avancer la Bêta…'
                }
            },
            thanksMessage: {
                topbar: 'Ma liste de services',
                title: 'Merci de vouloir ces supers fonctionnalités',
                description: 'Restez informé des nouveautés grâce à la newsletter.\nCes services ne sont pas implémentés pour la Bêta :o(\nMais nous y travaillons :o)',
                leave: 'Quitter le shop',
                continue: 'Continuer mon shopping'
            },
            cart: {
                topbar: 'Ma liste de services',
                cart: 'panier',
                add: 'Ajouter',
                addToCart: '@:components.shop.add au @:components.shop.cart',
                remove: 'Supprimer',
                removeFrom: '@:components.shop.remove du @:components.shop.cart',
                empty: 'Vider le @:components.shop.cart'
            },
            topbar: {
                close: 'Quitter le shop',
                cart: 'Accéder au @:components.shop.cart.cart'
            }
        }
    },
    links: {
        blogger: 'http://alphatestemergence.blogspot.fr/'
    },
    services: {
        api: {
            error: {
                title: 'Oups',
                message: `Une erreur s'est produite`
            }
        }
    }

}
