

class RelatedArticle extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }

    render(){
       
        return (
            <div className="related-article">
            <ul className="rec-article-ul">
            <li>
            <div className='article-hp-info'>
            <a href='#' className='rec-article-pic fr'> <img src='https://img.huxiucdn.com/article/cover/201709/20/075032421960.jpg?imageView2/1/w/522/h/396/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/></a>
            <div className="rec-article-info">
            <a href='#'>
            <h2>
            <span>如果你"已经看不懂用户了"怎么办?</span>
            </h2>
            </a>
            
            <div className='rec-article-time clearfix'>
            <span className='rec-author fl'>黄有璨</span>
            <span className='fl'>3小时前</span>
            <span className='fr'>30人收藏</span>
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