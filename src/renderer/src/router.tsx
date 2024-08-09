/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HashRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductTable from "./pages/ProductTable/ProductTable";
import EditProduct from "./pages/EditProduct/EditProduct";
import ProductSearchTable from "./pages/ProductSearchTable/ProductSearchTable";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/:page?" element={<ProductTable />} />
        <Route index path="/search/:name?" element={<ProductSearchTable />} />
        <Route path="/create" element={<CreateProduct />}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </HashRouter>
  );
}