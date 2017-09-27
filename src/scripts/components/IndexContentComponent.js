
import BannerComponent from "./BannerComponent"
import FooterComponent from "./FooterComponent"

class IndexContentComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <div>
            	<BannerComponent/>
               	<FooterComponent/>
            </div>
        )
    }
}
//定义默认属性
IndexContentComponent.defaultProps={

}



export default IndexContentComponent