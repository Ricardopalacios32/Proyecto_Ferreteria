/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HashRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductTable from "./pages/ProductTable/ProductTable";
import EditProduct from "./pages/EditProduct/EditProduct";
import ProductSearchTable from "./pages/ProductSearchTable/ProductSearchTable";
import AdminAuth from "./pages/AdminAuth/AdminAuth";
import CategoriesList from "./pages/Categories/CategoriesList/CategoriesList";
import AddCategory from "./pages/Categories/AddCategory/AddCategory";
import EditCategory from "./pages/Categories/EditCategory/EditCategory";


export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/:page?" element={<ProductTable />} />
        <Route index path="/search/:name?" element={<ProductSearchTable />} />
        <Route path="/create" element={<CreateProduct />}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="/category" element={<CategoriesList/>}/>
        <Route path="/category/create" element={<AddCategory/>}/>
        <Route path="/category/edit/:id" element={<EditCategory/>}/>
        <Route path="/auth" element={<AdminAuth/>}/>
      </Routes>
    </HashRouter>
  );
}