import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'

export class HeaderFirstPart extends Component{
  render(){
    return (
        <section class="section-header" id="about">
    		<div class="content">
    			<div class="contentBx"> 
            <h1 class="content-title">Be Ready</h1>
            <h1 class="content-big-title">Hand Picked Book<br/> to your door</h1>
                   </div>
                
                <div class="image-background" ></div>
                
                <div class="image">
                    <img src="https://demo2.tokomoo.com/pustaka/wp-content/uploads/sites/9/2016/10/Book_009.jpg" class="loading" alt="" data-was-processed="true"/>  
    			</div>
            </div>
	    </section>
    )
  }
}

export default  HeaderFirstPart