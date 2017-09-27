
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')
import IndexComponent from './scripts/components/IndexComponent'
import LoginComponent from './scripts/components/LoginComponent'
import RegisterComponent from './scripts/components/RegisterComponent'
import RootComponent from './scripts/components/RootComponent'
import ActivityComponent from './scripts/components/ActivityComponent'
import ChuangyeComponent from './scripts/components/ChuangyeComponent'
import BusinessComponent from './scripts/info_components/BusinessComponent'
import EntertainmentComponent from './scripts/info_components/EntertainmentComponent'
import SnowComponent from './scripts/info_components/SnowComponent'
import ArtificialComponent from './scripts/info_components/ArtificialComponent'
import TravelComponent from './scripts/info_components/TravelComponent'
import TerminalComponent from './scripts/info_components/TerminalComponent'
import HealthComponent from './scripts/info_components/HealthComponent'
import FinanceComponent from './scripts/info_components/FinanceComponent'
import ServiceComponent from './scripts/info_components/ServiceComponent'
import BuildBusinessComponent from './scripts/info_components/BuildBusinessComponent'
import CommunicationComponent from './scripts/info_components/CommunicationComponent'
import GlobalHotComponent from './scripts/info_components/GlobalHotComponent'
import LifeComponent from './scripts/info_components/LifeComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

 
// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
        
			<IndexRoute component={IndexComponent}/>
        	<Route path="/index" component={IndexComponent}></Route>
        	<Route path="/active" component={ActivityComponent}></Route>
        	<Route path="/chuangye" component={ChuangyeComponent}></Route>
        	<Route path="/login" component={LoginComponent}></Route>
        	<Route path="/register" component={RegisterComponent}></Route>
        	<Route path="/business" component={BusinessComponent}></Route>
        	<Route path="/entertainment" component={EntertainmentComponent}></Route>
        	<Route path="/snow" component={SnowComponent}></Route>
        	<Route path="/artificial" component={ArtificialComponent}></Route>
        	<Route path="/travel" component={TravelComponent}></Route>
        	<Route path="/terminal" component={TerminalComponent}></Route>
        	<Route path="/health" component={HealthComponent}></Route>
        	<Route path="/finance" component={FinanceComponent}></Route>
        	<Route path="/service" component={ServiceComponent}></Route>
        	<Route path="/build" component={BuildBusinessComponent}></Route>
        	<Route path="/communication" component={CommunicationComponent}></Route>
        	<Route path="/hot" component={GlobalHotComponent}></Route>
        	<Route path="/life" component={LifeComponent}></Route>
			
        </Route>
    </Router>
    
    ,document.getElementById("app"))