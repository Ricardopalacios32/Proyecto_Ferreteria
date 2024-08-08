/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HashRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductTable from "./pages/ProductTable/ProductTable";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductTable />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </HashRouter>
  );
}