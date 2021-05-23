import React,{Component} from 'react'
import './css/Search.css'
import Logo from './svg/logo.png'
import {Link} from 'react-router-dom'
export class Search extends Component{
  render(){
    return (
        <nav className="title">
          <div className="logo">
         	 <Link to="/"><h1>Bookland</h1></Link>
       	 </div>  
        <div className="search">
            <form class="#">
                <input class="search-bar" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="search-button" type="submit">Search</button>
            </form>
        </div>
        </nav>
        

    )
  }
}

export default Search
