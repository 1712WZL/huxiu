

class MoreArticle extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }
	goToDetail(){
    	var ID =  "http://localhost:9000/article/article/"+this.props.moreArticle.id+".html"
		location.href = ID
	}
    render(){
        return (
            <div className="related-article" id={this.props.moreArticle.id} onClick={this.goToDetail.bind(this)}>
            	<ul className="rec-article-ul">
		            <li>
			            <div className={this.props.changeSize?'article-hp-info1':'article-hp-info'}>
				            <a href='#' className='rec-article-pic fr'> <img src={this.props.moreArticle.img}/></a>
				            <div className="rec-article-info">
					            <a href='#'>
					            <h2>
					            <span>{this.props.moreArticle.title}</span>
					            </h2>
					            </a>
					            
					            <div className='rec-article-time clearfix'>
						            <span className='rec-author fl'>{this.props.moreArticle.author}</span>
						            <span className='fl'>{this.props.moreArticle.time}</span>
						            <span className='fr'>{this.props.moreArticle.collections}</span>
					            </div>
				            </div>
				         
			            </div>
		            </li>
	            
	            </ul>
            </div>
        )
    }

}

export default MoreArticle