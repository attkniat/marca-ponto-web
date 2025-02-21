export const routes = {
    auth: {
        path: 'auth',
        children: {
            login: {
                path: 'login',
                route: '/login',
            }//,
            // register: {
            //     path: 'register',
            //     route: '/User/create-customer',
            // },
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
};