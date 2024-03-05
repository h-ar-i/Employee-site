import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
            <div className="footer content d-flex justify-content-between">
                <div style={{width:'400px'}} className="media">
                    <h5>About us</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus labore ullam eos eveniet voluptas a porro ea, repellat facilis in suscipit accusamus exercitationem at. Rerum laborum nostrum animi optio illum.</p>
                    
                </div>
                <div className="Links">
                    <h5>About US</h5>
                    <h5>USER id</h5>
                    <h5>Total</h5>
                    <Link to={'/'} style={{textDecoration:'none',color:'black'}}><h5>Watch</h5></Link>
                    <Link to={'Home'} style={{textDecoration:'none',color:'black'}}><h5>Home Page</h5></Link>
                               <p className='text-center mt-5'>Copyright &copy; Built with react;</p>
                </div>
                
                <div className="GUIDE">
                    <h5>Career</h5>
                    <h5>Bolg</h5>
                    <h5>contact us</h5>
                    <Link to={'Watch'} style={{textDecoration:'none',color:'black'}}><h5>Landing page</h5></Link>
                    
                </div>
                <div className="contact">
                    <h5>Article</h5>
                    <h5>New opening</h5>
                    <input className='form-control me-1' type="text" placeholder='search here' />
                    <button className='btn btn-primary me-1 mt-2'><i class="fa-solid fa-arrow-right"></i></button>
                        <div className="icons d-flex justify-content-between mt-2 ">
                       <a href="https://in.linkedin.com/" target='_blank'>
                       <i className="fa-brands fa-linkedin-in"></i> 
                       <i className="fa-brands fa-mailchimp ms-3 "></i>
                       <i className="fa-regular fa-envelope ms-3"></i>
                       <i className="fa-brands fa-whatsapp ms-3"></i>
                       <i className="fa-brands fa-x-twitter ms-3"></i>
                       <i className="fa-brands fa-instagram ms-3"></i>
                       </a>
                        </div>
                        
                </div>
                

            </div>
    </div>
  )
}

export default Footer