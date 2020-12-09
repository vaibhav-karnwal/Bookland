import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/image.css'

export class SecondImage extends Component {
    render () {
        return (
            <div className="container">
            <div className="row">
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
                <div className='image left'>
                    <Link to="#"><img src="https://i.pinimg.com/originals/a3/1b/05/a31b054368c18b22f819b778e761b0d2.jpg" className="img-fluid" alt="#"/></Link>
                </div>
            </div>
            </div>
        )
      }
    }
export default SecondImage
