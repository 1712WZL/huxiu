import MenuComponent from './MenuComponent';
class HeadComponent extends React.Component{
	constructor(props,context){
		
		super(props,context)
		
		this.state={
			isClick:false
		}
		
	}
	changeIsClick(){
		this.setState({
			isClick:!this.state.isClick
		})
	}
	render(){
		console.log(this.state)
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
    				<button className="top-bar__nav" onClick={this.changeIsClick.bind(this)}>
    					{this.state.isClick?<i className="iconfont" style={style1}>&#xe604;</i>:<i className="iconfont">&#xe637;</i>}
    					
    				</button>
    				<div className="top-bar__title">
    					<img src="./imgs/m_logo.png"/>
    				</div>
    				<div className="top-bar__search">
    					<i className="iconfont">&#xe609;</i>
    				</div>
    			</div>
    			{this.state.isClick?<MenuComponent/>:""}
    			
			</div>
			
		)
	}
}

export default HeadComponent;
