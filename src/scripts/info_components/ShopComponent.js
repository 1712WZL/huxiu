import $ from 'jquery'
import ZtArticle from './ZtArticle'


class ShopComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          info:[]
        }
    }
    getData(){
    	let that = this
    	$.ajax({
    		url:that.props.url,
    		datatype:'json',
    		success(result){
    			that.setState({
    				info:result,
    				num:5
    			})
    		}
    		
    	})
    }
    
    showData(){
    	let arr=[]
    	let {info} = this.state
    	let that = this
    	info.forEach(function(item,i){
    		if(i<that.state.num){
    			arr.push(<ZtArticle info={item}/>)
    		}
    	})
    	return arr
    }
    getMore(){
    	this.setState({
    		num:this.state.num+5
    	})
    }
    
    componentWillMount(){
        this.getData()
    }
    render(){
     
        return (
          <div className='zt-article-wrap'>
          
          {this.showData()}
          <div className='button-more' onClick={this.getMore.bind(this)}>点击加载更多</div>
          </div>
        )
    }
    
}


//定义默认属性
ShopComponent.defaultProps={
	url:"./json/article.json"
}



export default ShopComponent