

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ProductForm() {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            className=""
            id="name"
          />
        </div>
        <div>
          <label htmlFor="buyprice">Precio de Compra</label>
          <input 
            type="number" 
            className=""
            id="buyprice"
          />
        </div>
        <div>
          <label htmlFor="sellprice">Precio de Venta</label>
          <input 
            type="number" 
            className=""
            id="sellprice"
          />
        </div>
        <div>
          <label htmlFor="quantity">Cantidad</label>
          <input 
            type="number" 
            className=""
            id="quantity"
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select name="" id="category">
            <option value="">--Seleccione una categoria--</option>
          </select>
        </div>
        
        
      </form>
    </>
  )
}
