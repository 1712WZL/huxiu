class HeadComponent extends React.Component{
	constructor(props,context){
		
		super(props,context)
		
		this.state={
			
		}
		
	}
	render(){
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
    				<button className="top-bar__nav">
    					<i className="iconfont">&#xe637;</i>
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
}

export default HeadComponent;
