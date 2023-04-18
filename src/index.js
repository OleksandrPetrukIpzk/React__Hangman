import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./Redux/index";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "Components/Main/Main";
import {Status} from "Components/Statistic/Status/Status";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/status',
        element: <Status/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
);

