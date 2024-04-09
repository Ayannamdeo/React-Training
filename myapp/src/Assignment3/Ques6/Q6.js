// 6.Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

import React from "react";
import { Route, BrowserRouter, Routes, Link} from "react-router-dom";
import { Products } from "./Products";
import { ProductsList } from "./ProductsLIst";
import { Product } from "./Product";
import { Home } from "./Home";
import { Error } from "./Error";

function AppLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductsList />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export function Q6() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
