import { Link, useParams } from "react-router-dom";
import { products } from "./productObj";

export function Product(){

    const { id } = useParams()
    const item = products.find(p => p.id === parseInt(id));
    
    if(!item) return <div>Item Not Found.</div>
        return (
            <div>
                <h3>Product Details: </h3>
                <p>Name: {item.name}</p>
                <p>Description: {item.details}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.qty}</p>
                <Link to='/products'>Go Back to List</Link>
            </div>
        );
}