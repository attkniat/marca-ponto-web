export const routes = {
    auth: {
        path: 'login',
        children: {
            login: {
                path: 'login',
                route: '/login',
            }
        },
    },
    root: {
        path: '/',
        children: {
            home: {
                path: '/',
                route: '/',
            },
        },
    },
    user: {
        path: 'user',
        children: {
            customer: {
                path: 'get-customer',
                route: '/User/get-customer'
            }
        }
    },
    tab: {
        path: 'tab',
        children: {
            home: {
                path: 'mark-point',
                route: '/mark-point'
            },
            point: {
                path: 'point',
                route: '/point-history'
            }
        }
    }
};