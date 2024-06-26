import { Link, useParams } from "react-router-dom"
function ProductDetailPage(){
    const params=useParams();

    return <>
    <h1>Products details</h1>
    <p>{params.id}</p>
    <p><Link to='..' relative="path">Back</Link></p>
    </>
}
export default ProductDetailPage