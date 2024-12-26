import HomePage from "../pages/home-page/HomePage.jsx";


export const routes = [
    {
        path: '/',
        name: 'Home',
        element: <HomePage />
    },
    {
        path: '/cart',
        name: 'Cart',
        element: <h1>Cart Page</h1>
    },
    {
        path: '*',
        name: '',
        element: <h1>Not Found Page 404 </h1>
    },
]

