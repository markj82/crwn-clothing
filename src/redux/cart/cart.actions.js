//! functions that return an object

import { CartActionTypes } from "./cart.types";

//! payload is an optional property on action object
// and in reducer we are not using the payload (in this case)
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})