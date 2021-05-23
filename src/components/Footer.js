import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './css/Footer.css'

export class Footer extends Component{
  render(){
    return (
      <footer>
        <section>
          <hr/>
            <div classNameName="search">
                <form className="form-inline my-2 my-lg-0">
                  <input className="search-bar" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="search-but" type="submit">Search</button>
                </form>
              </div>
            <div className="row">
                <div className="column">
                  <h4>Customer Services</h4>
                  <ul>
                      <li><Link to="/">Help Center</Link></li>
                      <li><Link to="/">Contact Us</Link></li>
                      <li><Link to="/">Report Abuse</Link></li>
                      <li><Link to="/">Submit a Dispute</Link></li>
                      <li><Link to="/">Policies & Rules</Link></li>
                      <li><Link to="/">Get Paid for Your Feedback
</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>About Us</h4>
                  <ul>
                      <li><Link to="/">About Bookland.com</Link></li>
                      <li><Link to="/">About Bookland Group</Link></li>
                      <li><Link to="/">Sitemap</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Buy on Bookland.com</h4>
                  <ul>
                      <li><Link to="/">All Categories</Link></li>
                      <li><Link to="/">Request for Quotation</Link></li>
                      <li><Link to="/">Ready to shop</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Sell on Bookland.com</h4>
                  <ul>
                      <li><Link to="/">Supplier Memberships</Link></li>
                      <li><Link to="/">Learning Center</Link></li>
                      <li><Link to="/">Partner Program</Link></li>
                  </ul>
                </div>
              </div>
        </section>
      <div className="credits">
          <p>2021. All rights reserved.</p>
      </div>
</footer>
    )
  }
}

export default Footer
