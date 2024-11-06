import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'Rs';
    const delivery_fee = 200;

    const value = {
        products , currency , delivery_fee
    }

    return(
        <ShopContextProvider value={value}>
            {props.children}
        </ShopContextProvider>
    )

}
export default ShopContextProvider