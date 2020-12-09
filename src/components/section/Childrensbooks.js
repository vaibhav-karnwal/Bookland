import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/Product.css'
import '../css/image.css'
export class Childrensbooks extends Component {
      state = {
        products: [
            {
                "_id": "1",
                "title": "Computer Organization",
                "src":"https://images-na.ssl-images-amazon.com/images/I/514mUvNvRPL._AC_.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"2",
                "title":"Computer Networks",
                "src":"https://user-assets.sharetribe.com/images/listing_images/images/2749346/big/511xppeknll.jpg?1585608481",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "3",
                "title": "Embedded Computing Systems",
                "src":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_44732874-e1500057501374.jpg?auto=format&q=60&fit=max&w=930",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "4",
                "title": "Communication Engineering",
                "src":"https://i.pinimg.com/originals/64/21/e7/6421e74fb71478fd7d060b2eb0f53d86.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"5",
                "title":"War and Peace ",
                "src":"https://i.pinimg.com/originals/e8/2f/cc/e82fcc725b3bd2120dd4622370882507.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"6",
                "title":"War and Peace ",
                "src":"https://art-sheep.com/wp-content/uploads/2016/01/Your-Favorite-Pop-Culture-Icons-Turned-Into-Kids-Book-Covers-By-Joey-Spiotto__880.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "7",
                "title": "War and Peace",
                "src":"https://i.pinimg.com/originals/ed/0f/77/ed0f7793f6d3607daa800334ddce9519.png",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"9",
                "title":"War and Peace ",
                "src":"https://www.pearlsandshells.com/wp-content/uploads/2018/05/THE-MYSTERIOUS-LAKE-BANDIT-CHILDREN-BOOK-COVER.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "10",
                "title": "Computer Organization",
                "src":"https://www.goodillustration.com/blog/wp-content/uploads/2019/06/SB-cover-23333.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"11",
                "title":"Computer Networks",
                "src":"https://lh3.googleusercontent.com/proxy/2CyqpLSZgCGoEcSgQpR9a0uVvLbwq44n8hWblHYtqij5HK-UjFzPNc3yD1Bh_967YWuARU1z6MaHto8GK9TBaxN16-dG61RgRZebbYJTWqZ0MmYUO5RSze9lZf4UCLHA",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "12",
                "title": "Embedded Computing Systems",
                "src":"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132185322/original/b85af666e56cb36953f79bd4c159a6b01dd10013/do-children-book-cover-title-design-and-illustration.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "13",
                "title": "Communication Engineering",
                "src":"https://i.pinimg.com/originals/94/d8/7a/94d87addadc15d35c52169e9223d38ba.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"14",
                "title":"War and Peace ",
                "src":"https://i.pinimg.com/originals/0c/3e/f8/0c3ef81f848979de3ae58dcaea3d5776.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"15",
                "title":"War and Peace ",
                "src":"https://www.creativeparamita.com/wp-content/uploads/2018/03/kids-fable.jpg",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id": "16",
                "title": "War and Peace",
                "src":"https://lumiere-a.akamaihd.net/v1/images/p_sleepingbeauty_signatureedition_18246_fe7a811d.jpeg?region=0,0,300,450",
                "description":"by Leo Tolstoy",
                "content":"Looks like there is a great book about C++ available for free. Checked it and it seems like a definitive guide. ",
                "price":20,
                "count":1
            },{
                "_id":"17",
                "title":"War and Peace ",
                "src":"https://images-na.ssl-images-amazon.com/images/I/813sqNiMx4L.jpg",
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
                        <Link to={`/childrensbooks/${product._id}`}>
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
    export default Childrensbooks