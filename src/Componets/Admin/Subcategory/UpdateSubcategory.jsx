import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getSubcategory, updateSubcategory } from "../../../Store/ActionCreater/SubcategoryActionCreaters"
import formValidationChecker from '../../ValidationCheckers/formValidationChecker'

export default function UpdateSubcategory() {
  let [name, setName] = useState("")
  let { id } = useParams()
  let [message, setMessage] = useState("")
  let [show, setShow] = useState(false)

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  function getInputData(e) {
    setMessage(formValidationChecker(e))
    setShow(false)
    setName(e.target.value)
  }
  async function postData(e) {
    e.preventDefault()
    if (name.length === 0) {
      var item = SubcategoryStateData.slice(1).find((x) => x.name === name)
      if (item) {
        setShow(true)
        setMessage("Subcategory  Alert Exist")
      }
      else {
        dispatch(updateSubcategory({ id: id, name: name }))
        navigate("/admin/subncategory")
      }
    }
    else
      setShow(true)
  }
  function getAPIdata() {
    dispatch(getSubcategory())
    if (SubcategoryStateData.length) {
      let item = SubcategoryStateData.slice(1).find((x) => x.id === Number(id))
      if (item)
        setName(item.name)
    }
  }
  useEffect(() => {
    getAPIdata()

  }, [SubcategoryStateData.length])
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-light   display-6">Admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/" className='text-light'>Home /</Link></li>
          <li className="breadcrumb-item active text-white">Subcategory</li>
        </ol>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h4 className='bg-primary text-center text-light p-2'>Subcategory</h4>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name <span className='text-danger'>***</span></label>
                <input type="text" name="name" onChange={getInputData} className='form-control' value={name} placeholder='Sub Category' />
                {show ? <p className='text-danger text-capitalize my-2'>{message}</p> : ""}
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
