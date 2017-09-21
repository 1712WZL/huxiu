
import BannerComponent from "./BannerComponent"
import FooterComponent from "./FooterComponent"
import HeadComponent from "./HeadComponent"
import GetArticleComponent from "./GetArticleComponent"

class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
        console.log(this)
        return (
            <div className="full-height">
            	<HeadComponent/>
            	<BannerComponent/>
               	<FooterComponent/>
                <GetArticleComponent/>
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={

}



export default RootComponent