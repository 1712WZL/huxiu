
import HeadComponent from "./HeadComponent"
import MenuComponent from "./MenuComponent"
import IndexContentComponent from "./IndexContentComponent"
import store from '../redux/store'
import actions from '../redux/actions'

class IndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          isClick:store.getState().isClick,
          userInfo:store.getState().userInfo
        }
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <div className="full-height">
            {console.log(this.state.userInfo)}
            	<HeadComponent/>
    			{this.state.isClick?<MenuComponent/>:<IndexContentComponent/>}
            	
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
IndexComponent.defaultProps={

}



export default IndexComponent