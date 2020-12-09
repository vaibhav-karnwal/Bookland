import React,{Component} from 'react'
export const DataContext=React.createContext();
export class DataProvider extends Component{
    
    state={
        products:[
            {
                "_id": "1",
                "title": "Computer Organization",
                "src":"https://cdn01.sapnaonline.com/bk_images/449/9788128019449.jpg",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id":"2",
                "title":"Computer Networks",
                "src":"https://images-na.ssl-images-amazon.com/images/I/31dpalSiYnL._BO1,204,203,200_.jpg",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id": "3",
                "title": "Embedded Computing Systems",
                "src":"https://static.kopykitab.com/image/cache/data/faculty-notes/505783-300x380.jpg",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id": "4",
                "title": "Communication Engineering",
                "src":"https://images-na.ssl-images-amazon.com/images/I/81w0nUTxL3L.jpg",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id":"5",
                "title":"War and Peace ",
                "src":"https://lh3.googleusercontent.com/proxy/V5CmChiZUBzDhIAtlmIExChEfqBtVX4BY-093yGT2ysJ175bgvMjlV2i0n9cyIZm85zBLFo1z_Q7ENddJwwQxfVPCsIg0gSp3_pkfnn7cwp-FyQHvwFpW4VARdcgiA",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id":"6",
                "title":"War and Peace ",
                "src":"https://qph.fs.quoracdn.net/main-qimg-558fa2a680dc4f8681e01f256ba9e73d",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id": "7",
                "title": "War and Peace",
                "src":"https://rukminim1.flixcart.com/image/352/352/k55n0y80/regionalbooks/x/b/r/physics-for-information-science-b-e-b-tech-ii-semester-r-17-anna-original-imafnwp34hgr575z.jpeg?q=70",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            },{
                "_id":"8",
                "title":"War and Peace ",
                "src":"https://images-na.ssl-images-amazon.com/images/I/81qigTqmMEL.jpg",
                "description":"by Leo Tolstoy",
                "content":"sdasnkfaskl",
                "price":20,
                "count":1
            }
        ],
        cart:[],
        total: 0

    }
  
    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


