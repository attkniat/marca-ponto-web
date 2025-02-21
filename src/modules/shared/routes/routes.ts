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
};