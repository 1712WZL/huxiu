class MenuComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			
		}
	}
	render(){
		return (
			
		<div className="menu">

		    <div className="menu__information">
		        <a href="/">资讯</a>
		    </div>
            <ul className="menu__info-ul">
                <li><a href="">电商消费</a></li>
                <li><a href="">娱乐淘金</a></li>
                <li><a href="">雪花一代</a></li>
                <li><a href="">人工智能</a></li>
                <li><a href="">车与出行</a></li>
                <li><a href="">智能终端</a></li>
                <li><a href="">医疗健康</a></li>
                <li><a href="">金融地产</a></li>
                <li><a href="">企业服务</a></li>
                <li><a href="">创业维艰</a></li>
                <li><a href="">社交通讯</a></li>
                <li><a href="">全球热点</a></li>
                <li><a href="">生活腔调</a></li>
            </ul>
		    
		    <ul className="menu__nav-ul">
		        <li>
		            <a>24小时</a>
		        </li>
		        <li>
		            
		            <a href="">活动</a>
		        </li>
		        <li>
		        	<a href="">创业板</a>
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
		    <div className="menu__login">
		       
	                <a href="" className="loginBtn">登录</a>
	                <a href="" className="regisBtn">极速注册</a>
	            
	        </div>
	        
		</div>      
		    
		    
		
		
	
		)
	}
}
export default MenuComponent;
