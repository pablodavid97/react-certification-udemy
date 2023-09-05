import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const routeDefinitions = createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:productId" element={<ProductDetail />} />
    </Route>
);

// const router = createBrowserRouter([
//     { path: '/', element: <HomePage /> }, 
//     { path: '/products', element: <ProductsPage /> }, 
// ]);

const router = createBrowserRouter(routeDefinitions);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
