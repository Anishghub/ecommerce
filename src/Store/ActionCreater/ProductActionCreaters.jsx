import { UPDATE_PRODUCT } from "../Sagas/Constants";
import { DELETE_PRODUCT } from "../Sagas/Constants";
import { GET_PRODUCT } from "../Sagas/Constants";
import { ADD_PRODUCT } from "../Sagas/Constants";

export function addProduct(data) {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
export function getProduct() {
    return { 
        type: GET_PRODUCT,

    }
}
export function updateProduct(data) {
    return {
        type: UPDATE_PRODUCT,
        payload: data
    }
}
export function deleteProduct(data) {
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}
