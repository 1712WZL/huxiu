import $ from 'jquery'
import Industry from './Industry'
import Area from './Area'
class NavWrapComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          isInduShow:false,
          isAreaShow:false,
          isSort:false
        }
    }
   toggleInduShow(){
	   	this.setState({
	   		isInduShow:!this.state.isInduShow,
	   		isAreaShow:false
	   	})
   }
   toggleAreaShow(){
	   	this.setState({
	   		isAreaShow:!this.state.isAreaShow,
	   		isInduShow:false
	   	})
   }
   resetLi(){
   		this.setState({
	   		isInduShow:false,
	   		isAreaShow:false,
	   		isSort:false
	   	})
   }
   changeSort(){
   		this.setState({
   			isSort:!this.state.isSort
   		})
   }
    render(){
        return (
        	<div>
	            <div className='navwrap'>
				    <ul>
				    	<li id="reset_li">
				    		<span onClick={this.resetLi.bind(this)}>重置</span>
				    	</li>
				    	<li className='industry'>
				    		<span onClick={this.toggleInduShow.bind(this)}>行业<i className={this.state.isInduShow?"icon-cy icon-cy-caret active":"icon-cy icon-cy-caret"}></i></span></li>
				    	<li>
				    		<span onClick={this.toggleAreaShow.bind(this)}>地区<i className={this.state.isAreaShow?"icon-cy icon-cy-caret active":"icon-cy icon-cy-caret"}></i></span></li>
				    	<li>
				    		<span onClick={this.changeSort.bind(this)}>{this.state.isSort?"热度排序":"时间排序"}<i className="icon-cy icon-cy-caret"></i></span>
			    		</li>
				    </ul>
	            </div>
          		{this.state.isInduShow?<Industry/>:""}
          		{this.state.isAreaShow?<Area/>:""}
            </div>
          
        )
    }
   	componentDidMount(){
   		var that = this
   		$("body").on("click",'.cy-tag-list ul li',function(){
   			var t = $(this)
   			t.addClass("active").siblings().removeClass("active")
   		})
   	}
   	componentDidUpdate(){
   		if(this.state.isInduShow||this.state.isAreaShow){
   			$("body").css("overflow","hidden")
   		}else{
   			$("body").css("overflow","auto")
   		}
   	}
}
//定义默认属性


NavWrapComponent.defaultProps={
	url:'./json/industry.json'
}

export default NavWrapComponent