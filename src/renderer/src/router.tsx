import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductTable from "./pages/ProductTable/ProductTable";



// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<ProductTable/>} />
            <Route path="/create" element={<CreateProduct/>} />
            
        </Routes>
    </BrowserRouter>
  )
}
