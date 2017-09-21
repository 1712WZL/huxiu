 
import RelatedArticle from './RelatedArticle'
import StoryBox from './StoryBox'
class ArticleWrap extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }

    render(){
       
        return (
            <div className="articlewrap">
            <RelatedArticle/>
            <RelatedArticle/>
            <StoryBox/>
               
            </div>
        )
    }

}

export default ArticleWrap