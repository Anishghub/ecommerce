
import { UPDATE_SUBCATEGORY } from "../Sagas/Constants";
import { DELETE_SUBCATEGORY } from "../Sagas/Constants";
import { GET_SUBCATEGORY } from "../Sagas/Constants";
import { ADD_SUBCATEGORY } from "../Sagas/Constants";

export function addSubcategory(data) {
    return {
        type: ADD_SUBCATEGORY,
        payload: data
    }
}
export function getSubcategory() {
    return { 
        type: GET_SUBCATEGORY,

    }
}
export function updateSubcategory(data) {
    return {
        type: UPDATE_SUBCATEGORY,
        payload: data
    }
}
export function deleteSubcategory(data) {
    return {
        type: DELETE_SUBCATEGORY,
        payload: data
    }
}
