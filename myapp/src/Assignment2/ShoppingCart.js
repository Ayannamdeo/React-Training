// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.
import { createContext,  useContext, useState } from "react";

const CartContext = createContext();

export function ShoppingCart() {
  return (
    <CartProvider>
      <div>
        <h1>Question-11: ShoppingCart</h1>
        <DisplayProducts />
        <Cart />
      </div>
    </CartProvider>
  );
}

function CartProvider({ children }) {
  const [cartContent, setCartContent] = useState([]);

  return (
    <CartContext.Provider value={{ cartContent, setCartContent }}>
      {children}
    </CartContext.Provider>
  );
}

function DisplayProducts() {
  const {setCartContent} = useContext(CartContext);

  const products = [
    {id:1, item: "iphone 15", price: 100000 },
    {id:2, item: "fujiVI", price: 120000 },
    {id:3, item: "Royal Enfield", price: 300000 },
    {id:4, item: "i20", price: 700000 },
  ];

  return (
    <div>
      <h2>Product List: </h2>
      <ul>
        {products.map((p) => (
          <li>
            {`${p.item} - ${p.price} rs `}
            <button onClick={()=>setCartContent((prevState) => [...prevState, p])} >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cart(){
    const {cartContent, setCartContent} = useContext(CartContext);

    return (
      <div>
        <h2>Cart Items: </h2>
      <ul>
        {cartContent.map((p) => (
          <li>
            {`${p.item}  `}
            <button onClick={()=>setCartContent(prevState => prevState.filter((content)=>p.id !== content.id))} >
              Remove
            </button>
          </li>
        ))}
      </ul>
        <TotalCost />
      </div>
    );

}

function TotalCost(){
    const {cartContent} = useContext(CartContext);

    return(
        <>
        <h2 style={{ display: 'inline'}}>Total cost of cart items is: </h2>
        <p style={{ display: 'inline'}}>{cartContent.reduce((acc, item)=> acc+item.price, 0)}</p>
        </>
    );
}