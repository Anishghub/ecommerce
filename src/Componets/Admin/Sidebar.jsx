import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
     <div className="list-group">
  <Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true">
       <i className='fa fa-home'></i><span className='float-end'>Home</span>
  </Link>
  <Link to="/adin/users" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-home'></i><span className='float-end'>Users</span></Link>
  <Link to="/admin/maincategory" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-list'></i><span className='float-end'>maincategory</span></Link>
  <Link to="/admin/subcategory" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-list'></i><span className='float-end'>Subcategory</span></Link>
  <Link to="/admin/brand" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-list'></i><span className='float-end'>Brads</span></Link>
  <Link to="/admin/product " className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-list'></i><span className='float-end'>Products</span></Link>
  <Link to="/admin/testimonial" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-star'></i><span className='float-end'>Teestimonial</span></Link>
  <Link to="/admin/checkout" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-shopping-bag'></i><span className='float-end'>Checkout</span></Link>
  <Link to="/admin/contactus" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-phone'></i><span className='float-end'>conntactUs</span></Link>
  <Link to="/admin/newsletter" className="list-group-item list-group-item-action"><i className='text-primary fs-4 fa fa-envelope'></i><span className='float-end'>NewLetters</span></Link>
    
</div>
    </>
  )
}
