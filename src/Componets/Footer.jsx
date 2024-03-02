import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
           {/* <!-- Footer Start --> */}
           <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-5">
            <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)"}}>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <a href="#">
                                <h1 className="text-light mb-0">Ssc</h1>
                                <p className="text-light mb-0">Latest Trending Fashion!!</p>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email"/>
                                <button type="submit" className="btn btn-primary border-0 border-light py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0,right: 0}}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn  btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3 text-light">Why People Like us!</h4>
                            <p className="mb-4 text-light">typesetting, remaining essentially unchanged. It was 
                                popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                   
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Bottom Menu</h4>
                            <Link className="btn-link text-light" to="/">Home</Link>
                            <Link className="btn-link text-light" to="shop">Shop</Link>
                            <Link className="btn-link text-light" to="contact">Contact</Link>
                            <Link className="btn-link text-light" to="testimonial">Testimonials</Link>
                    
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">QUick link</h4>
                            <a className="btn-link text-light" href="">Privacy Policy</a>
                            <a className="btn-link text-light" href="">Term & Condition</a>
                            <a className="btn-link text-light" href="">Refunt Policy</a>
                            <a className="btn-link text-light" href="">FAq</a>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p className='text-light'>Address: Sec 46 gurgaon haryana</p>
                            <p>Email: <a className='text-light' href='mailto:Shwetas2020a@gmail.com'>tanudadhwal09@gmail.com</a></p>
                            <p>Phone: <a className='text-light' href='tel:7717761569'>+91+7717761569</a></p>
                            <p>Whats-App: <a className='text-light' href="https://wa.me/7717761569">+91+7717761569</a></p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><a href="#" className='text-light'><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end text-white">

                     
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Copyright End --> */}

    </>
  )
}
