import React, { Component } from 'react'
import Programmingbooks from './section/Programmingbooks'
import Storybooks from './section/Storybooks'
import Scififantasy from './section/Scififantasy'
import Childrensbooks from './section/Childrensbooks'
import Subjectivebooks from './section/Subjectivebooks'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import FirstImage from './section/FirstImage'
import SecondImage from './section/SecondImage'
import ThirdImage from './section/ThirdImage'
import FourthImage from './section/FourthImage'
import FifthImage from './section/FifthImage'
import Discount from './section/Discount'
import Login from './section/Login'



export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={FirstImage} exact />
                    <Route path="/" component={SecondImage} exact />
                    <Route path="/" component={ThirdImage} exact />
                    <Route path="/" component={FourthImage} exact />
                    <Route path="/" component={FifthImage} exact />
                    <Route path="/" component={Discount} exact />
                    <Route path="/programming-books" component={Programmingbooks} exact  />
                    <Route path="/childrens-books" component={Childrensbooks} exact  />
                    <Route path="/subjective-books" component={Subjectivebooks} exact  />
                    <Route path="/story-books" component={Storybooks} exact  />
                    <Route path="/scifi-fantasy" component={Scififantasy} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/login" component={Login} exact />
                    <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section
