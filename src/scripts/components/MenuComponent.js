
import {Link} from 'react-router'
import store from '../redux/store'
import actions from '../redux/actions'
import $ from "jquery"

class MenuComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			userInfo:store.getState().userInfo
		}
	}
	exit(){
		localStorage.removeItem("userInfo")
		actions.exit()
		actions.changeClick()
	}
	componentWillMount(){

	}
	render(){
		return (	
		<div className="menu">
		    <div className="menu__information">
		        <a href="#/" onClick={actions.changeClick}>资讯</a>
		    </div>
            <ul className="menu__info-ul">
                <li><a href="#/business">电商消费</a></li>
                <li><a href="#/entertainment">娱乐淘金</a></li>
                <li><a href="#/snow">雪花一代</a></li>
                <li><a href="#/artificial">人工智能</a></li>
                <li><a href="#/travel">车与出行</a></li>
                <li><a href="#/terminal">智能终端</a></li>
                <li><a href="#/health">医疗健康</a></li>
                <li><a href="#/finance">金融地产</a></li>
                <li><a href="#/service">企业服务</a></li>
                <li><a href="#/build">创业维艰</a></li>
                <li><a href="#/communication">社交通讯</a></li>
                <li><a href="#/hot">全球热点</a></li>
                <li><a href="#/life">生活腔调</a></li>
            </ul>
		    
		    <ul className="menu__nav-ul">
		        <li>
		            <a>24小时</a>
		        </li>
		        <li>
		            
		            <Link to="/active" onClick={actions.changeClick}>活动</Link>
		        </li>
		        <li>
		        	<Link to="/chuangye" onClick={actions.changeClick}>创业板</Link>
                </li>
		    </ul>
		    <div className="menu__join">
	            
            	<div className="menu__join__left">
            		<i className="icon-png1"></i>
            		加入会员，解锁专属内容

            	</div>
            	<div className="menu__join__right">
            		<i className="icon-png2"></i>
            	</div>
	            	
	            
		    </div>
		    {this.state.userInfo.name ? <div className="user__panel">
							                <a className="user__info"><span>欢迎 {this.state.userInfo.name}</span></a>
							                <a href="/" className="user__exit" onClick={this.exit.bind(this)}>退出账号</a>            
								        </div>
								      : <div className="menu__login">
							                <a href="#/login" className="loginBtn" onClick={actions.changeClick}>登录</a>
							                <a href="#/register" className="regisBtn" onClick={actions.changeClick}>极速注册</a>            
								        </div>   
		   }
	        
		</div>      
		    
		    
		
		
	
		)
	}
	componentDidMount(){
    	let that = this
		$(".menu__info-ul").on("click","li a",function(){
			actions.changeClick()
		})
    	
    	store.subscribe(()=>{
    		that.setState({
    			isClick:store.getState().isClick,
    			userInfo:store.getState().userInfo
    		})
    	})
    	
   }
}
export default MenuComponent;
