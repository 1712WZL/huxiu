
import HeadComponent from "./HeadComponent"
import MenuComponent from "./MenuComponent"
import DownMenuComponent from "./DownMenuComponent"
import store from '../redux/store'
import actions from '../redux/actions'
import $ from "jquery"

class RegisterComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			isClick:store.getState().isClick,
			userID:"",
            password:""
		}
	}
	
	render(){
		//注，登录与注册模块布局相似，所以注册模块的类名基本与登录模块一样，布局样式不同之处添加了另一个类名。。
		return (
			<div>
				{<HeadComponent/>}
				{this.state.isClick?<MenuComponent/>:<RegisterPanelComponent/>}
				
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




class RegisterPanelComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			changeCountry:false
		}
	}
	changeCountry(){
		this.setState({
			changeCountry:!this.state.changeCountry
		})
	}
	register(){
		let that = this
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"register",
				userID:that.state.userID,
				password:that.state.password
			},
			success(results){
				console.log(results)
				if(results==1){
					location.href="#/login"
				}
			}
		})
	}
	changeValue(type,e){
		let obj = {}
		obj[type] = e.target.value
		this.setState(obj)
	}
	render(){
		return (
			<div>
				{this.state.changeCountry?<DownMenuComponent/>:
					<div className="login">
						<h3 className="login__title">
							<span>极速注册</span>
						</h3>
						<div className="login__userName register__mobileNum">
							<a onClick={this.changeCountry.bind(this)}><span className="chooseCont">+32</span><i></i></a>
							<input onBlur={this.changeValue.bind(this,"userID")} type="text" className="login__userName__input login__input" placeholder="输入手机号"/>
						</div>
						<div className="login__userPwd register__code">
							<input onBlur={this.changeValue.bind(this,"password")} type="password" className="login__userPwd__input login__input" placeholder="输入6位验证码"/>
							<span className="getCode">
								获取验证码
							</span>
						</div>
						
						<div className="login__loginDiv login__registerDiv">
							<button onClick={this.register.bind(this)} className="loginBtn">注册</button>
						</div>
						
						<div className="login__fastMes"><a href="#/login">已有虎嗅账号，去登录</a></div>
					</div>
				}
			</div>
			
			
		)
	}
}

export default RegisterComponent;