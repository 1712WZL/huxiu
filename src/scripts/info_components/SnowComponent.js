import ShopComponent from './ShopComponent'
import HeadComponent from '../components/HeadComponent'
import FooterComponent from '../components/FooterComponent'
import MenuComponent from "../components/MenuComponent"
import store from '../redux/store'
import actions from '../redux/actions'
import ZtArticleTime from './ZtArticleTime'
class SnowComponent extends React.Component {   
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
		               		<span>雪花一代</span>
		           		</div>
		           		<div className='index-ad-box'>
					        <img src='https://img.huxiucdn.com/article/cover/201709/26/132549892611.jpg?imageView2/1/w/900/h/675/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/>
					          
					        <h2>大手笔，阿里53亿增持菜鸟，未来五年还要投个1000亿</h2>
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
SnowComponent.defaultProps={

}



export default SnowComponent