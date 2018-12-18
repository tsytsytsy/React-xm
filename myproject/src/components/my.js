import React,{Component} from "react";
import {NavLink} from "react-router-dom"


export default class My extends Component{
	render(){
		return(
			<div>
				<div id="header">
					<div className="return"><NavLink to="/home/index">返回</NavLink></div>
				</div>
			</div>
		)
	}
}
