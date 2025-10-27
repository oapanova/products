import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductListPage from "./pages/ProductList/ProductListPage.tsx";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage.tsx";

const router = createBrowserRouter([
    { path: "/", element: <ProductListPage /> },
    { path: "/product/:id", element: <ProductDetailsPage /> },
    { path: "*", element: <div>404 Page Not Found</div> },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
