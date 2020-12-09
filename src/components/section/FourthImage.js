import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/image.css'

export class FourthImage extends Component {
    render () {
        return (
            <div className="container">
            <div className="row">
                <div className='image left'>
                    <Link to="#"><img src="https://www.freelancinggig.com/blog/wp-content/uploads/2017/05/Best-Perl-Programming-Books.jpg" className="img-fluid" alt="#"/></Link>
                </div>
                <div className='content-detail right'>
                    <div className="cont-det">
                        <h3 className="section-title"><Link to="#">Algorithms</Link></h3>
                        <p>Notes for Professionals</p>
                        <h6>Just from <span> Rs 35.00</span></h6>
                        <div className="button">
                            <Link to="#">Discover Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
      }
    }
export default FourthImage
