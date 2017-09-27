

class ArticleList extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }
	goToDetail(){
    	var ID =  "http://localhost:9000/article/article/"+this.props.articleList.id+".html"
		location.href = ID
	}
    render(){
        return (
            <div className="related-article" id={this.props.articleList.id} onClick={this.goToDetail.bind(this)}>
            	<ul className="rec-article-ul">
		            <li>
			            <div className={this.props.changeSize?'article-hp-info1':'article-hp-info'}>
				            <a className='rec-article-pic fr'> <img src={this.props.articleList.img}/></a>
				            <div className="rec-article-info">
					            <a>
					            <h2>
					            <span>{this.props.articleList.title}</span>
					            </h2>
					            </a>
					            
					            <div className='rec-article-time clearfix'>
						            <span className='rec-author fl'>{this.props.articleList.author}</span>
						            <span className='fl'>{this.props.articleList.time}</span>
						            <span className='fr'>{this.props.articleList.collections}</span>
					            </div>
				            </div>
				         
			            </div>
		            </li>
	            
	            </ul>
            </div>
        )
    }

}

export default ArticleList