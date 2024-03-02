
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSubcategory, getSubcategory } from "../../../Store/ActionCreater/SubcategoryActionCreaters"
import { DataGrid } from '@mui/x-data-grid'; 

export default function Subcategory() {
    // MUi section start
    const columns = [
      { field: 'id', headerName: 'ID', width: 250 },
      { field: 'name', headerName: 'Name', width: 250 },
      {
        field: 'edit',
        headerName: 'Edit',
        sortable: false,
        renderCell: ({ row }) => <Link to={`/admin/subcategory/update/${row.id}`}><i className='fa fa-edit text-primary'></i></Link>  //edit link which is not working
      },
      {
        field: 'delete',
        headerName: 'Delete',
        sortable: false,
        description: "", 
        width: 100,
        renderCell: ({ row }) => <button onClick={() => deleteItem(row.id)} className='btn text-danger'><i className='fa fa-trash'></i></button>
      },
    ]
    // MUi section end 
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  function deleteItem(id) {
    if(window.confirm("Are you sure to DELETE that Item ?:")){
    dispatch(deleteSubcategory({ id: id }))
    getAPIData()
    }
  }
  function getAPIData() {
    dispatch(getSubcategory())
    if (SubcategoryStateData.length)
      setData(SubcategoryStateData.slice(1).reverse())
  }
  useEffect(() => {
    getAPIData()
  }, [SubcategoryStateData.length])
  return (
    <>

      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-light   display-6">admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/" className='text-light'>Home /</Link></li>
          <li className="breadcrumb-item active text-white"> Subcategory</li>
        </ol>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h4 className='bg-primary text-center text-light p-2'>Subcategory  <Link to="/admin/subcategory/create"> <i className='fa fa-plus text-light float-end'></i></Link></h4>
            {/* <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link to={`/admin/subcategory/update/${item.id}`}><i className='fa fa-edit text-primary'></i></Link></td>
                      <td><button onClick={() => deleteItem(item.id)} className='btn text-danger'><i className='fa fa-trash'></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table> */}
               <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection={false}
            />
          </div>
        </div>
      </div>

    </>
  )
}
