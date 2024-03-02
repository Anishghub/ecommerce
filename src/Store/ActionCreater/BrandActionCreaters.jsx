import { UPDATE_BRAND } from "../Sagas/Constants";
import { DELETE_BRAND } from "../Sagas/Constants";
import { GET_BRAND } from "../Sagas/Constants";
import { ADD_BRAND } from "../Sagas/Constants";

export function addBrand(data) {
    return {
        type: ADD_BRAND,
        payload: data
    }
}
export function getBrand() {
    return { 
        type: GET_BRAND,

    }
}
export function updateBrand(data) {
    return {
        type: UPDATE_BRAND,
        payload: data
    }
}
export function deleteBrand(data) {
    return {
        type: DELETE_BRAND,
        payload: data
    }
}
