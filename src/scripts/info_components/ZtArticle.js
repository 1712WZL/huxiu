
import ZtArticleTime from './ZtArticleTime'
class ZtArticle extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }
	goToDetail(){
    	var ID =  "http://localhost:9000/article/article/"+this.props.info.id+".html"
		location.href = ID
	}
    render(){
       
        return (
            <div className="zt-related-article" onClick={this.goToDetail.bind(this)}>
            <ul className="rec-article-ul">
            <li>
            <div className='article-hp-info'>
            <a className='rec-article-pic fr'> <img src={this.props.info.img}/></a>
            <div className="rec-article-info">
            <a>
            <h2>
            <span>{this.props.info.title}</span>
            </h2>
            </a>
            
            <ZtArticleTime/>
            </div>
         
            </div>
            </li>
            
            </ul>
            </div>
        )
    }

}

export default ZtArticle