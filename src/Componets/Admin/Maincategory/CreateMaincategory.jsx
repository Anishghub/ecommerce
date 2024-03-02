import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from "../Sidebar"
import { useDispatch, useSelector } from 'react-redux'
import { getMaincategory, addMaincategory } from "../../../Store/ActionCreater/MaincategoryActionCreaters"
import formValidationChecker from '../../ValidationCheckers/formValidationChecker'

export default function CreateMaincategory() {
  let name = useRef("")
  let [message, setMessage] = useState("Name field must be required")
  let [show, setShow] = useState(false)
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  let navigate = useNavigate()

  function getInputData(e) {
    setMessage(formValidationChecker(e)) 
    setShow(false)
    name.current = e.target.value
  }

  async function postData(e) {
    e.preventDefault()
    if (message.length === 0) {
      var item = MaincategoryStateData.find((x) => x.name === name.current)
      if (item) {
        setShow(true)
        setMessage("Maincategory  Alert Exist")
      }
      else {
        dispatch(addMaincategory({ name: name.current }))
        navigate("/admin/maincategory")

      }
    }
    else {
      setShow(true)
    }
  } 
function getAPIData() {
  dispatch(getMaincategory())
}
useEffect(() => {
  getAPIData()
}, [MaincategoryStateData.length])

return (
  <>
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-light   display-6">Admin</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"><Link to="/" className='text-light'>Home /</Link></li>
        <li className="breadcrumb-item active text-white">Maincategory</li>
      </ol>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h4 className='bg-primary text-center text-light p-2'>Main category create </h4>
          <form onSubmit={postData}>
            <div className="mb-3">
              <label>Name <span className='text-danger'>***</span></label>
              <input type="text" name="name" onChange={getInputData} className='form-control' placeholder='Main Category' />
              {show ? <p className='text-danger texr-capitalize my-2'>{message}</p> : ""}
            </div>
            <div className="mb-3">
              <button type='submit' className='btn btn-primary text-light w-100'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </>
)
}
