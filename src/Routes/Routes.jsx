import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../Layout/NewsLayout';
import News from '../Pages/News/News';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Category></Category>,
                loader: () => fetch('https://dragon-news-server-site-aminul-islam01.vercel.app/news')
            },
            {
                path: "category/:id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-site-aminul-islam01.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader: ({params}) => fetch(`https://dragon-news-server-site-aminul-islam01.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    }
])

export default router;