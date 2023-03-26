import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <ProductInfo />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    }
])