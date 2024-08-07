import ProductForm from "../ProductForm/ProductForm";


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AddProductForm() {
  return (
    <>
      <form action="">
        <ProductForm/>
        <input type="submit" value="Registrar Producto"/>
      </form>
    </>
  )
}
