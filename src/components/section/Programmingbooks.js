import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'

export class Programmingbooks extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
                <div className="row">
                    <div className="search-list">
                        <h1>Catalog</h1>
                        <h2>Categories</h2>
                        <ul>
                        <li><Link to="/programming-books">Programming Books</Link></li>
                        <li><Link to="/childrens-books">Childrens Books</Link></li>
                        <li><Link to="/subjective-books">Subjective Books</Link></li>
                        <li><Link to="/story-books">Story Books</Link></li>
                        <li><Link to="/scifi-fantasy">Sci-fi & Fantasy</Link></li>
                        </ul>
                        <h2>Availability</h2>
                        <ul>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                        </ul>
                        <h2>Author</h2>
                        <ul>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                        </ul>
                        <h2>Price Range</h2>
                        <ul>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                        </ul>
                        <h2>Language</h2>
                        <ul>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                            <li><Link to="">Childrens Books</Link></li>
                        </ul>
                    </div>
                    <div id="product">
                    {
                       products.map(product =>(
                           <div className="card" key={product._id}>
                               <Link to={`/product/${product._id}`}>
                                   <img src={product.src} alt=""/>
                               </Link>
                               <div className="content">
                                   <span>Price : ${product.price}</span>
                                   <button onClick={()=> addCart(product._id)}>Add to cart</button>
                               </div>
                           </div>
                        ))
                    }
                    </div>
                </div>
        )
    }
}
export default Programmingbooks
