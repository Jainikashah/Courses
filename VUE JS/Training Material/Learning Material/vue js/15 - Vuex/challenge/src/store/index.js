import { createStore } from "vuex";
import {auth} from './modules/auth';
import { products } from "./modules/products";
import { cart } from "./modules/cart";
export const store = createStore({
    modules : {
        auth : auth,
        products :products,
        cart : cart
    },
})