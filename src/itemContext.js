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


    const {children} = props;
    console.log("children", children);

      const handleAdd = (price) => {
        console.log("add", price);
    setTotal(total + price);
    setItem(item + 1);


  };

  const handleRemove = (price) => {
    if(total <=0){
      return;
    }
    setTotal(total -price);
    setItem(item -1);
  };

  const clear = () => {
    setItem(0);
    setTotal(0);
  }


  const toggle = () => {
    setShowCart(!showCart);
  }

    return (
     <itemContext.Provider value={{item,  total, handleAdd, handleRemove, clear, toggle}}>
        {showCart && <CartModal toggle={toggle} />}
            {children}
     </itemContext.Provider>
    )
}

export const itemContext = createContext();
export {useValue};

export default CustomItemContext;
