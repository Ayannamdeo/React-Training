import { Link } from "react-router-dom";
import { products } from "./productObj";

export function ProductsList(){
    return (
        <ol>
        {products.map(item => (
            <li key={item.id}>
                <Link to={`/products/${item.id}`}>
                {item.name}
                </Link>               
            </li>
        ))}
        </ol>
    );
}