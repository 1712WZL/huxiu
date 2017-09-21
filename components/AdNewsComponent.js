import PlaceHolderLine from './PlaceHolderLine'
import RelatedArticle from './RelatedArticle'

class AdNewsComponent extends React.Component {   
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
          <div className='index-ad-box'>
          <img src='https://static.huxiucdn.com/m/image/moment_ad_banner.png'/>
          </div>
          <RelatedArticle/>
          <RelatedArticle/>
          <RelatedArticle/>
          </div>
        )
    }
    
}


//定义默认属性
AdNewsComponent.defaultProps={

}



export default AdNewsComponent