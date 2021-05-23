import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import '../css/image.css'
import '../css/style.css'

export class HeaderSecondPart extends Component{
	static contextType = DataContext;

    render() {
		const Filter = (props) => {
			return (
				<div className="row sticky searchFilter">
					<div className="col-md-4">
						<p className="text">{props.count} Products found</p>
					</div>
					<div className="col-md-4">
					   <div className="inner-addon left-addon">
							<i className="glyphicon glyphicon-search"></i>
							<input className="form-control" type="text" value={props.search} onChange={(e)=>props.handleSearch(e.target.value)} placeholder="Search products..."/>
						</div>
					</div>
					<div className="col-md-4">
						<select className="form-control select" onChange={(e) =>  props.handleChangeSort(e.target.value)} >
								<option value="">Order By</option>
								<option value="lowest">Lowest to Highest</option>
								<option value="highest">Highest to Lowest</option>
							</select>
					</div>	
				</div>
			)
		}
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

export default  HeaderSecondPart