import ShopComponent from './ShopComponent'
import HeadComponent from '../components/HeadComponent'
import FooterComponent from '../components/FooterComponent'
import MenuComponent from "../components/MenuComponent"
import store from '../redux/store'
import actions from '../redux/actions'
import ZtArticleTime from './ZtArticleTime'
class TerminalComponent extends React.Component {   
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
		               		<span>智能终端</span>
		           		</div>
		           		<div className='index-ad-box'>
					        <img src='https://img.huxiucdn.com/article/cover/201709/26/175220224043.jpg?imageView2/1/w/900/h/675/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/>
					          
					        <h2>国行 iPhone X 亮相工信部，最大亮点是 128G 版本还在</h2>
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
TerminalComponent.defaultProps={

}



export default TerminalComponent