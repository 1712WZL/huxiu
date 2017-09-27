

import getData from "../modules/getData"
import HeadComponent from "./HeadComponent"
import MenuComponent from "./MenuComponent"
import FooterComponent from "./FooterComponent"
import store from "../redux/store"
import actions from "../redux/actions"

var flag=true;
class ActivityComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			activity:[],
			flag:true,
			isClick:store.getState().isClick
		}
	}
	getList(){
		let that=this
		getData("/json/activity.json",(data)=>{
			
			that.setState({
				activity:data,
				account:8
			})
			
			
		})
	}
	componentWillMount(){
		this.getList();
	}
	showList(){
		
		let {activity}=this.state;
		
		let arr=[];
		if(activity.length){
			
			activity.forEach((item,i)=>{
				if(i<this.state.account){
					arr.push(<ActivityListComponent activitys={item}/>)
				}

			})
			if(this.state.account==activity.length){
				flag=false
			}
			
		}
		
		return arr;
		
	}
	getMore(){
			this.setState({
				account:this.state.account+8
			})
		
	}
	render(){
		return (
			<div>
				<HeadComponent/>
				{this.state.isClick?<MenuComponent/>:
					<div>
						<ul className="activity-ul">
							{this.showList.bind(this)()}
							{flag?<div className="activity-ul__getMore" onClick={this.getMore.bind(this)}>点击加载更多</div>:<div className="activity-ul__getMore">已经到底了</div>}

						</ul>
						<FooterComponent/>
					</div>
				}
				
			</div>
		)
	}
	componentDidMount(){
    	let that = this
    	store.subscribe(()=>{
    		that.setState({
    			isClick:store.getState().isClick
    		})
    	})
    }
	
	
};


class ActivityListComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			
		}
	}
	render(){
		return (
			<li className="activity-ul-li">
				<img className="activity-list-img" src={this.props.activitys.imgUrl}/>
				<h5>{this.props.activitys.title}</h5>
				<div className="time-box">
					
					<div className="time-box__left"> 
					{this.props.activitys.outTime?<span className="outTime1">已过期</span>:<span>立即购票</span>}
					{this.props.activitys.outTime?<span className="outTime2">{this.props.activitys.date}</span>:<span>{this.props.activitys.date}</span>}	
						
					</div>
					<div className="time-box__right">
						<span>{this.props.activitys.city}</span><i>|</i><span>{this.props.activitys.qishu}</span>
					</div>
				</div>
			</li>
		)
	}
}
export default ActivityComponent;

