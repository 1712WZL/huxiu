

class RelatedArticle extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }
	goToDetail(){
    	var ID =  "http://localhost:9000/article/article/"+this.props.article.id+".html"
		location.href = ID
	}
    render(){

        return (
            <div className="related-article" id={this.props.article.id} onClick={this.goToDetail.bind(this)}>
            	<ul className="rec-article-ul">
		            <li>
			            <div className='article-hp-info' >
				            <a className='rec-article-pic fr'> <img src={this.props.article.img}/></a>
				            <div className="rec-article-info">
					            <a>
					            <h2>
					            <span>{this.props.article.title}</span>
					            </h2>
					            </a>
					            
					            <div className='rec-article-time clearfix'>
						            <span className='rec-author fl'>{this.props.article.author}</span>
						            <span className='fl'>{this.props.article.time}</span>
						            <span className='fr'>{this.props.article.collections}人收藏</span>
					            </div>
				            </div>
				         
			            </div>
		            </li>
	            
	            </ul>
            </div>
        )
    }

}

export default RelatedArticle