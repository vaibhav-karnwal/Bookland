import React, { Component } from 'react'
import './css/Section.css'
import Programmingbooks from './section/Programmingbooks'
import Storybooks from './section/Storybooks'
import Scififantasy from './section/Scififantasy'
import Childrensbooks from './section/Childrensbooks'
import Subjectivebooks from './section/Subjectivebooks'
import Details from './section/Details'
import Cart from './section/Cart'
import {Route} from "react-router-dom"
import Signin from './section/Signin'
import Signup from './section/Signup'
import Payment from './section/Payment'
import JSONDATA from '../product.json'
import HeaderFirstPart from './section/HeaderFirstPart'
import HeaderSecondPart from './section/HeaderSecondPart'
import HeaderSixthPart from './section/HeaderSixthPart'
import HeaderSeventhPart from './section/HeaderSeventhPart'



export class section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={HeaderFirstPart} exact  />
                <Route path="/" component={HeaderSixthPart} exact  />
                <Route path="/" component={HeaderSecondPart} exact  />
                <Route path="/" component={HeaderSeventhPart} exact  />
                <Route path="/programming-books" component={Programmingbooks} exact  />
                <Route path="/childrens-books" component={Childrensbooks} exact  />
                <Route path="/subjective-books" component={Subjectivebooks} exact  />
                <Route path="/story-books" component={Storybooks} exact  />
               <Route path="/scifi-fantasy" component={Scififantasy} exact  />
                <Route path="/product/:id" component={Details} exact />
                <Route path="/cart" component={Cart}  exact/>
                <Route path="/signin" component={Signin} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default section
