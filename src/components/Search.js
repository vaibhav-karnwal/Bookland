import React,{Component} from 'react'
import './css/Search.css'
import JSONDATA from '../product.json'
import Logo from './svg/logo.png'
import {Link} from 'react-router-dom'
import{useState} from 'react'
function Search(){
  const [searchTerm, setSearchTerm] = useState('')
    return (
        <nav className="title">
          <div className="logo">
         	 <Link to="/"><h1>Bookland</h1></Link>
       	 </div>  
        <div className="search">
            <form class="#">
                <input class="search-bar" type="search" placeholder="Search" aria-label="Search" onChange={event =>{setSearchTerm(event.target.value)}}></input>
                {JSONDATA.filter((val)=>{
                  if(searchTerm =>""){
                    return val
                  }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                  }
                }).map((val, key)=>{
                  return(
                    <div className="user" key={key}>
                      <p>{val.title}</p>
                    </div>
                  );
                })}
                <button class="search-button" type="submit">Search</button>
            </form>
        </div>
        </nav>
        

    )
  }

export default Search
