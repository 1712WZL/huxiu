
import HeadComponent from "./HeadComponent"
import MenuComponent from "./MenuComponent"
import store from '../redux/store'
import actions from '../redux/actions'
import $ from "jquery"

class LoginComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
            isClick:store.getState().isClick,
            userInfo:store.getState().userInfo,
            userID:"",
            password:""
		}
	}
	login(){
		let that = this
		if(that.state.userID!=""){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"login",
					userID:that.state.userID,
					password:that.state.password
				},
				dataType:'json',
				success(results){
					console.log(results)
					if(results!=0&&results!=2){
						actions.changeUserInfo({name:results.userID})
						localStorage.userInfo=JSON.stringify({name:results.userID})
						location.href="#/"
					}
					
				}
			});
		}
		
	}
	changeValue(type,e){
		let obj = {}
		obj[type] = e.target.value
		this.setState(obj)
	}
	render(){
		return (
			<div>
				{<HeadComponent/>}
				{this.state.isClick?<MenuComponent/>:
					<div className="login">
						
						<h3 className="login__title">
							<span>登录虎嗅</span><a href="#/register">极速注册</a>
						</h3>
						<div className="login__userName">
							<input onBlur={this.changeValue.bind(this,"userID")} type="text" className="login__userName__input login__input" placeholder="手机号 / 邮箱 / 用户名"/>
						</div>
						<div className="login__userPwd">
							<input onBlur={this.changeValue.bind(this,"password")} type="password" className="login__userPwd__input login__input" placeholder="密码"/>
							<span className="canSee">
								<i></i>
							</span>
						</div>
						<div className="forgetPwd">
							<a href="">忘记密码 ？</a>	
						</div>
						<div className="login__loginDiv">
							<button className="loginBtn" onClick={this.login.bind(this)}>登录</button>
						</div>
						
						<div className="login__fastMes"><a>短信快捷登录</a></div>
						<div className="login__loginMethods">
							<span className="login__loginMethods__qq"></span>
							<span className="login__loginMethods__weichat"></span>
						</div>
					</div>}
			
			</div>
			
		)
	}
	componentDidMount(){
    	let that = this
    	store.subscribe(()=>{
    		that.setState({
    			isClick:store.getState().isClick,
    			userInfo:store.getState().userInfo
    		})
    	})
   }
}


export default LoginComponent;
