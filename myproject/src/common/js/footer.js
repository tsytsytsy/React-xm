import React,{Component} from "react";
import "../css/footer.css";
import {NavLink} from "react-router-dom";


export default class Footer extends Component{
	render(){
		return (
			<div id="header">
				<div>我是logo</div>
				<ul>
					<li><NavLink to="/home">首页</NavLink></li>
					<li><NavLink to="/buy">购票</NavLink></li>
					<li><NavLink to="/shop">商城</NavLink></li>
					<li><NavLink to="/find">发现</NavLink></li>
					<li><NavLink to="/my"><i className="fa fa-user-o"></i></NavLink></li>
				</ul>
			</div>
		)
	}
}

