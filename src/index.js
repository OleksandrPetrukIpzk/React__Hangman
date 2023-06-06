import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {Main} from "Components/Hangman/Main/Main";
import {Status} from "Components/Statistic/Status/Status";
import {Shop} from "Components/Shop/Shop";
import {OwnElements} from "Components/OwnElements/OwnElements";
import {Sudoku} from "Components/Sudoku/Sudoku";
import {store, persistor} from "./Redux/index";
import {PersistGate} from "redux-persist/integration/react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/status',
        element: <Status/>
    },
    {
        path: '/shop',
        element: <Shop/>
    },
    {
        path: '/library',
        element: <OwnElements/>
    },
    {
        path: '/sudoku',
        element: <Sudoku/>
    }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
);

