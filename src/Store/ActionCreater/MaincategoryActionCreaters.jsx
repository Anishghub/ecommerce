import { UPDATE_MAINCATEGORY } from "../Sagas/Constants";
import { DELETE_MAINCATEGORY } from "../Sagas/Constants";
import { GET_MAINCATEGORY } from "../Sagas/Constants";
import { ADD_MAINCATEGORY } from "../Sagas/Constants";

export function addMaincategory(data) {
    return {
        type: ADD_MAINCATEGORY,
        payload: data
    }
}
export function getMaincategory() {
    return { 
        type: GET_MAINCATEGORY,

    }
}
export function updateMaincategory(data) {
    return {
        type: UPDATE_MAINCATEGORY,
        payload: data
    }
}
export function deleteMaincategory(data) {
    return {
        type: DELETE_MAINCATEGORY,
        payload: data
    }
}
