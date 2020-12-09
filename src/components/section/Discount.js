import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/Discount.css'

export class Discount extends Component{
  render(){
    return (
        <section>
          <div className="discount">
              <div className="row">
                <div className="title">
                  <h2 className="section-title">Get Discount 50% Off</h2>
                  <p>Subscribe our newsletter and get discount 50% off</p>
                </div>
                <div classNameName="search">
                <form className="form-inline my-2 my-lg-0">
                  <input className="search-bar" type="search" placeholder="Newspaper" aria-label="Search"></input>
                  <button className="search-button" type="submit">Search</button>
                </form>
              </div>
                </div>   
          </div>
        </section>
    )
  }
}

export default Discount
