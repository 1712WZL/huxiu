﻿import ShopComponent from './ShopComponent'
import HeadComponent from '../components/HeadComponent'
import FooterComponent from '../components/FooterComponent'
import MenuComponent from "../components/MenuComponent"
import store from '../redux/store'
import actions from '../redux/actions'
import ZtArticleTime from './ZtArticleTime'
class BusinessComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        isClick:store.getState().isClick
    }
    render(){
        return (
        	
            <div className="column-wrap">
               <HeadComponent/>
    			{this.state.isClick?<MenuComponent/>:
    				<div>
	    				<div className='zt-container'>
		               		<span>电商消费</span>
		           		</div>
		           		<div className='index-ad-box'>
					        <img src='https://img.huxiucdn.com/article/cover/201709/22/083906617224.jpg?imageView2/1/w/900/h/675/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/>
					          
					        <h2>中国新零售的机会在哪里?</h2>
					        <ZtArticleTime/>
				          
				        </div>
	           			<ShopComponent/>
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
}
//定义默认属性
BusinessComponent.defaultProps={

}



export default BusinessComponent