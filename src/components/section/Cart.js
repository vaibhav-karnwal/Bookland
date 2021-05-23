import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Cart is Empty</h2>
        }else{
            return (
                <>
                    <div class="col-left">
                    <div>
                        <h2>BookLand Cart</h2>
                    </div>
                    {
                        
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    </div>
                    <div class="col-right">
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                    </div>
                </>
                )
            }
        }
}

export default Cart
