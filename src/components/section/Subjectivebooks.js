import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/Product.css'
import '../css/image.css'
export class Subjectivebooks extends Component {
      state = {
        products: [
            {
                "_id": "1",
                "title": "Computer Organization",
                "src":"https://goalkicker.com/DotNETFrameworkBook/DotNETFrameworkGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"2",
                "title":"Computer Networks",
                "src":"https://goalkicker.com/AlgorithmsBook/AlgorithmsGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "3",
                "title": "Embedded Computing Systems",
                "src":"https://goalkicker.com/AndroidBook/AndroidGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "4",
                "title": "Communication Engineering",
                "src":"https://goalkicker.com/Angular2Book/Angular2Grow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"5",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/BashBook/BashGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"6",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/AngularJSBook/AngularJSGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "7",
                "title": "War and Peace",
                "src":"https://goalkicker.com/CBook/CGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"9",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/CPlusPlusBook/CPlusPlusGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "10",
                "title": "Computer Organization",
                "src":"https://goalkicker.com/DotNETFrameworkBook/DotNETFrameworkGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"11",
                "title":"Computer Networks",
                "src":"https://goalkicker.com/AlgorithmsBook/AlgorithmsGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "12",
                "title": "Embedded Computing Systems",
                "src":"https://goalkicker.com/AndroidBook/AndroidGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "13",
                "title": "Communication Engineering",
                "src":"https://goalkicker.com/Angular2Book/Angular2Grow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"14",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/BashBook/BashGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"15",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/AngularJSBook/AngularJSGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "16",
                "title": "War and Peace",
                "src":"https://goalkicker.com/CBook/CGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"17",
                "title":"War and Peace ",
                "src":"https://goalkicker.com/CPlusPlusBook/CPlusPlusGrow.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },
        ]
      }
     
      render () {
        const { products } = this.state;
        const {addCart} = this.context;
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
                <div id="product" size="3" className="small-right">
                    {products.map(product => 
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product._id}`}>
                        <img src={product.src} alt=""/></Link>
                        <span>${product.price}</span>
                        <button onClick={()=> addCart(product.id)}>Add to cart</button>
                    </div>
                    )}         
                </div>
            </div>
        )
      }
    }
export default Subjectivebooks