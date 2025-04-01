import { createContext, useState , useContext} from "react";
import CartModal from "./components/CartModal";


//readabiluty , easy to maintain, easy to debug

//custom hook to consume value of context
function useValue(){
    const value = useContext(itemContext);
    console.log("value", value);

    return value;
}




//custom provider acts as a component which acts as a provider and makes use of a default provider
function CustomItemContext(props){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const {children} = props;
    console.log("children", children);

      const handleAdd = (prod) => {
        console.log("prod", prod);
        const index = cart.findIndex((item) => item.id === prod.id );
        if(index === -1){
            setCart([...cart, {...prod, qty : 1}]);
            console.log("cart", cart);
            setTotal(total + prod.price);
        }else{
            cart[index].qty++;
            setCart(cart);
            setTotal(total + cart[index].price);
            console.log("cart else", cart);
        }
        setItem(item+1);


  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if(index !== -1){
        cart[index].qty--;
        setItem(item -1);
        setTotal(total - cart[index].price);
        if(cart[index].qty == 0){
            
            cart.splice(index, 1);
            console.log("cart remove", cart);
        }
    }
    console.log("cart emp", cart);

    setCart(cart);
  };

  const clear = () => {
    setItem(0);
    setTotal(0);
    setCart([]);
  }


  const toggle = () => {
    setShowCart(!showCart);
  }

    return (
     <itemContext.Provider value={{item,  total, handleAdd, handleRemove, clear, toggle, cart}}>
        {showCart && <CartModal  />}
            {children}
     </itemContext.Provider>
    )
}

export const itemContext = createContext();
export {useValue};

export default CustomItemContext;
