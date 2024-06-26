import { Link } from "react-router-dom"
function ProductPage(){
    const PRODUCTS=[
        {id:'p1' , title:'product 1'},
        {id:'p2' , title:'product 2'},
        {id:'p3' , title:'product 3'},
    ]
    return <>
    <h>ProductPage</h>
    <ul>
        {PRODUCTS.map((product)=>(
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
        </li>  
        ))}
        
       
    </ul>
    </>
}
export default ProductPage