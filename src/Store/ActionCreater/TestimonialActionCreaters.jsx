import { UPDATE_TESTIMONIAL } from "../Sagas/Constants";
import { DELETE_TESTIMONIAL } from "../Sagas/Constants";
import { GET_TESTIMONIAL } from "../Sagas/Constants";
import { ADD_TESTIMONIAL } from "../Sagas/Constants";

export function addTestimonial(data) {
    return {
        type: ADD_TESTIMONIAL,
        payload: data
    }
}
export function getTestimonial() {
    return { 
        type: GET_TESTIMONIAL,

    }
}
export function updateTestimonial(data) {
    return {
        type: UPDATE_TESTIMONIAL,
        payload: data
    }
}
export function deleteTestimonial(data) {
    return {
        type: DELETE_TESTIMONIAL,
        payload: data
    }
}
