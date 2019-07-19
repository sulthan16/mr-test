

const routes = [{
    id: 'Home',
    exact: true,
    path: '/',
    auth: false,
    redirect: false,
    component: () => import('views/Home')

}, {
    id: 'Login',
    exact: true,
    path: '/login',
    auth: false,
    redirect: false,
    component: () => import('views/Login')
}]

export default routes