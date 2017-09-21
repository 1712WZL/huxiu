

class FooterComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			
		}
	}
	
	componentWillMount(){
		
	}
	render(){
		return (
			<footer>
			    <ul>
			        <li><a href="/" target="_blank">关于我们</a></li>
			        <li><a href="/">手机版</a></li>
			        <li><a href="/">桌面版</a></li>
			        <li><a className="btn-open">客户端</a></li>
			    </ul>
			    <div className="copyright-box">
			        ©2017 虎嗅网 m.huxiu.com
			    </div>
			</footer>
		)
	}
}

FooterComponent.defaultProps = {
	
}

export default FooterComponent