import {all} from "redux-saga/effects";
import maincategorySaga from "../MaincategorySagas";
import subcategorySaga from "../SubcategorySagas"
import brandSaga from "../SubcategorySagas"
import productSaga from "../SubcategorySagas"
import testimonialSaga from "../TestimonialSagas"

export default function* RootSaga() {
  yield all([
    maincategorySaga(),
    subcategorySaga(),
    brandSaga(),
    productSaga(),
    testimonialSaga(),
   ])
}
   