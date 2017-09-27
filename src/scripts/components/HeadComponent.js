import store from '../redux/store'
import actions from '../redux/actions'
import IndexContentComponent from './IndexContentComponent';
class HeadComponent extends React.Component{
	constructor(props,context){
		
		super(props,context)
		
		this.state={
			isClick:store.getState().isClick
		}
		
	}
//	changeIsClick(){
//		this.setState({
//			isClick:!this.state.isClick
//		})
//	}
	render(){
		let style1={fontSize:'0.2rem'}
		
		return (
			<div className="headCommon">
				<div className="head">
					<div className="head__left">
						<div className="head__left__logo">
							<img src="./imgs/guide-logo.png"/>
						</div>
	    				<div className="head__left__text">虎不咬你，你来咬我？</div>
					</div>
    				
    				<div className="head__right">好啊</div>
    				
    			</div>
    			<div className="top-bar">
    				<button className="top-bar__nav" onClick={actions.changeClick}>
    					{this.state.isClick?<i className="iconfont" style={style1}>&#xe604;</i>:<i className="iconfont">&#xe637;</i>}
    					
    				</button>
    				<div className="top-bar__title">
    					<img src="./imgs/m_logo.png"/>
    				</div>
    				<div className="top-bar__search">
    					<i className="iconfont">&#xe609;</i>
    				</div>
    			</div>
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
}

export default HeadComponent;
