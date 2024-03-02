import { takeEvery, put } from "redux-saga/effects"
// import { GET_PRODUCT, ADD_PRODUCT_RED } from "./Constants"
import { addRecord, getRecord, updateRecord, deleteRecord } from "./Service/ProductService"
import {
    ADD_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT,
    GET_PRODUCT, ADD_PRODUCT_RED, UPDATE_PRODUCT_RED
} from "./Constants"
// Correct the path and filename if needed

function* addSaga(action) {
    let response = yield addRecord(action.payload)
    yield put({ type: ADD_PRODUCT_RED, payload: response })

}
function* getSaga() {
    let response = yield getRecord()
    yield put({ type: GET_PRODUCT_RED, payload: response })

}
function* updateSaga(action) {
    yield updateRecord(action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, payload: action.payload })

}
function* deleteSaga(action) {
    yield deleteRecord(action.payload)
    yield put({ type: DELETE_PRODUCT_RED, payload: action.payload })

}
export default function* productSaga() {
    yield takeEvery(ADD_PRODUCT, addSaga)
    yield takeEvery(GET_PRODUCT, getSaga)
    yield takeEvery(UPDATE_PRODUCT, updateSaga)
    yield takeEvery(DELETE_PRODUCT, deleteSaga)
}


