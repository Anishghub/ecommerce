import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function () {
  return (
    <>

      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-light   display-6">Admin Home </h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/" className='text-light'>Home /</Link></li>
          <li className="breadcrumb-item active text-white">Admin Home</li>
        </ol>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h4 className='bg-primary text-center text-light p-2'>admin home Section</h4>
            <div className="row">
              <div className="col-md-6">
                <img src="/img/d2.webp" height="380px" width="100%" alt="" />
              </div>
              <div className="col-md-6">
                <table className='table table-hover table-bordered'>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Anish kumar Singh</th>
                    </tr>
                    <tr>
                      <th> User-Name</th>
                      <th>Admin</th>
                    </tr>
                    <tr>
                      <th>E-mail</th>
                      <th>anis@gmail.com</th>
                    </tr>
                    <tr>
                      <th>Phone no</th>
                      <th>7717761569</th>
                    </tr>
                    <tr>
                      <td colSpan={2}> <Link to="/update-profile" className='btn btn-primary text-light w-100'>Update Profile</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
