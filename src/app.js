
require("./styles/app1.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'
import IndexComponent from './scripts/components/IndexComponent'
import ActiveComponent from './scripts/components/ActiveComponent'
import ChuangyeComponent from './scripts/components/ChuangyeComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

 
// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
        
			<IndexRoute component={IndexComponent}/>
        	<Route path="/index" component={IndexComponent}></Route>
        	<Route path="/active" component={ActiveComponent}></Route>
        	<Route path="/chuangye" component={ChuangyeComponent}></Route>
            

        </Route>
    </Router>
    
    ,document.getElementById("app"))