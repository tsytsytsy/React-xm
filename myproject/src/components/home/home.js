import React,{Component} from "react";
import {NavLink,Redirect} from "react-router-dom"
import Footer from "../../common/js/footer"

export default class Home extends Component{
	render(){
		return(
			<div>
				<Footer/>
				<div>我是首页</div>
			</div>
		)
	}
}
