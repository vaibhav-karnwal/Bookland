import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import './css/Search.css'
import {DataContext} from './Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="title">
                    <div className="logo">
                        <Link to="/"><h2>Bookland</h2></Link>
                    </div> 
                </div> 
                <div className="navbar">
                    <ul className={toggle ? "toggle" : ""}>
                        <li className="dropdown">
                            <button className="dropbtn">Books Category
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/programming-books">Programming Books</Link>
                                <Link to="/childrens-books">Childrens Books</Link>
                                <Link to="/subjective-books">Subjective Books</Link>
                                <Link to="/story-books">Story Books</Link>
                                <Link to="/scifi-fantasy">Sci-fi & Fantasy</Link>
                                <Link to="/Bookspdf">Download Pdf Books</Link>
                            </div>
                        </li>
        
                        <li className="search">
                            <form class="#">
                                <input class="search-bar" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="search-button" type="submit">Search</button>
                            </form>
                        </li>                    
                        <li className="dropdown Sign">
                            <button className="dropbtn Signin">SignIn/Up</button>
                            <div className="dropdown-content">
                                <Link to="/signin">Sign In</Link>
                                <Link to="/signup">Sign Up</Link>
                            </div>
                        </li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                        <li className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to="/cart">
                                <img src={CartIcon} alt="" width="20"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
