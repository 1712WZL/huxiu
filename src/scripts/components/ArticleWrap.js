 
import RelatedArticle from './RelatedArticle'
import MoreArticle from './MoreArticle'
import ArticleList from './ArticleList'
import StoryBox from './StoryBox'
import getData from "../modules/getData"
var isAll = true
class ArticleWrap extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            article:[],
            articleList:[],
            flag:true,
            moreArticle:[]
        }
    }

    componentWillMount(){
        
    }
	getArticle1(){
		let that=this
		getData("/json/list1.json",(data)=>{
			that.setState({
				article:data
			})
		})
	}
	getArticle2(){
		let that=this
		getData("/json/list2.json",(data)=>{
			that.setState({
				articleList:data
			})
		})
	}
	getMoreArticle(){
		let that=this
		getData("/json/list3.json",(data)=>{
			that.setState({
				moreArticle:data,
				num:10
			})
		})
	}
	componentWillMount(){
		this.getArticle1();
		this.getArticle2();
		this.getMoreArticle();
	}
	showArticle1(){
		let {article} = this.state 
		let arr = []
		article.forEach((item,i)=>{
			//console.log(item)
			arr.push(<RelatedArticle article={item}/>)
		})
		return arr
	}
	
	showArticle2(){
		let {articleList} = this.state 
		let arr1 = []
		articleList.forEach((item,i)=>{
			//console.log(item)
			if(i<15){
				if((i+1)%4==1){
					if(i==0){
						arr1.push(<div className="related-article">
            						<ul className="rec-article-ul">
		            					<li>
			           					 <div className='article-hp-info1'>
				            				<a href='#' className='rec-article-pic fr'> <img src={item.img}/></a>
										 </div>
										</li>
									</ul>
									</div>)
					}else{
						arr1.push(<ArticleList articleList={item} changeSize={this.state.flag}/>)			
					}

				}else{
					arr1.push(<ArticleList articleList={item}/>)
				}
				
			}else{
				arr1.push(<ArticleList articleList={item}/>)
			}
			
		})
		return arr1
	}
	showMoreArticle(){
		let {moreArticle} = this.state 
		let arr2 = []
		moreArticle.forEach((item,i)=>{
			//console.log(item)
			if(i<this.state.num){
				arr2.push(<MoreArticle moreArticle={item}/>)
			}
			if(this.state.num>=moreArticle.length){
				isAll = false;
			}
			
		})
		return arr2
	}
	getMore(){
		this.setState({
			num:this.state.num+10
		})
	}
    render(){
       
        return (
            <div className="articlewrap activity-ul">
            	{this.showArticle1.bind(this)()}
	            <StoryBox/>
	            {this.showArticle2.bind(this)()}
            	{this.showMoreArticle.bind(this)()}
				{isAll?<div className="activity-ul__getMore" onClick={this.getMore.bind(this)}>点击加载更多</div>:<div className="activity-ul__getMore">已经到底了</div>}
            	
            </div>
        )
    }
}

export default ArticleWrap