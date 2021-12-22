import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { registerReducer } from "../../components/auth/Register/reducer";
import { productsReducer } from "../../components/products/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    products: productsReducer

});

export type RootState = ReturnType<typeof rootReducer>;