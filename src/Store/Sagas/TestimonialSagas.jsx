import { takeEvery, put } from "redux-saga/effects"
// import { GET_TESTIMONIAL, ADD_TESTIMONIAL_RED } from "./Constants"
import { addRecord, getRecord, updateRecord, deleteRecord } from "./Service/TestimonialService"
import {
    ADD_TESTIMONIAL, DELETE_TESTIMONIAL, DELETE_TESTIMONIAL_RED, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL,
    GET_TESTIMONIAL, ADD_TESTIMONIAL_RED, UPDATE_TESTIMONIAL_RED
} from "./Constants"
// Correct the path and filename if needed

function* addSaga(action) {
    let response = yield addRecord(action.payload)
    yield put({ type: ADD_TESTIMONIAL_RED, payload: response })

}
function* getSaga() {
    let response = yield getRecord()
    yield put({ type: GET_TESTIMONIAL_RED, payload: response })

}
function* updateSaga(action) {
    yield updateRecord(action.payload)
    yield put({ type: UPDATE_TESTIMONIAL_RED, payload: action.payload })

}
function* deleteSaga(action) {
    yield deleteRecord(action.payload)
    yield put({ type: DELETE_TESTIMONIAL_RED, payload: action.payload })

}
export default function* testimonialSaga() {
    yield takeEvery(ADD_TESTIMONIAL, addSaga)
    yield takeEvery(GET_TESTIMONIAL, getSaga)
    yield takeEvery(UPDATE_TESTIMONIAL, updateSaga)
    yield takeEvery(DELETE_TESTIMONIAL, deleteSaga)
}


