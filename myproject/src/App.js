import React, { Component } from 'react';
import {HashRouter,Route,Link,Switch,NavLink,Redirect} from "react-router-dom";
import Home from "./components/home";
import Index from "./components/index";
import Buy from "./components/buy";
import Shop from "./components/shop";
import Find from "./components/find";
import My from "./components/my";




class App extends Component {
  render() {
    return (
			
      <HashRouter>
     		 <div>
		   			<Route path="/home" component={Home}/>
      			<Route path="/home/index"  component={Index}/>
      			<Route path="/home/buy" component={Buy}/>
      			<Route path="/home/shop" component={Shop}/>
      			<Route path="/home/find" component={Find}/>
      			<Route path="/my" component={My}/>
      			<Redirect path="/" to="/home/index"/>
      	</div>	
      </HashRouter>
    
      
    );
  }
}

export default App;
