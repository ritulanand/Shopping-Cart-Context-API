import { createContext, useState } from "react";

export const itemContext = createContext();


//custom provider acts as a component which acts as a provider and makes use of a default provider
function CustomItemContext(props){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const {children} = props;
    console.log("children", children);
    return (
     <itemContext.Provider value={{item, setItem, total, setTotal}}>
            {children}
     </itemContext.Provider>
    )
}


export default CustomItemContext;
