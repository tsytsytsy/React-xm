import React,{Component} from "react";
import {NavLink,Redirect} from "react-router-dom"
import "../common/css/footer.css"


export default class Home extends Component{
	render(){
		return(
			<div>
				<div id="header">
					<div>我是logo</div>
					<ul>
						<li><NavLink to="/home/index">首页</NavLink></li>
						<li><NavLink to="/home/buy">购票</NavLink></li>
						<li><NavLink to="/home/shop">商城</NavLink></li>
						<li><NavLink to="/home/find">发现</NavLink></li>
						<li><NavLink to="/my">我的</NavLink></li>
					</ul>
				</div>
			</div>
		)
	}
}
