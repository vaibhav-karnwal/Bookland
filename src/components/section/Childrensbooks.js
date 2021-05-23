import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import '../css/image.css'

export class Childrensbooks extends Component {
    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return ( 
                
                    <div id="product" size="3" className="small-right">
                    {
                       products.map(product =>(
                           <div className="card" key={product._id}>
                               <Link to={`/product/${product._id}`}>
                                   <img src={product.src} alt=""/>
                               </Link>
                                   <span>Price : ${product.price}</span>
                                   <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                        ))
                    }
                    </div>
        )
    }
}
    export default Childrensbooks