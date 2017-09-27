import $ from 'jquery'
import CpInfo from './CpInfo'
class CpListComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          info:[]
        }
    }
     getInfo(){
    	let that = this
    	$.ajax({
    		url:that.props.url,
    		datatype:'json',
    		success(result){
    			that.setState({
    				info:result,
    				num:10
    			})
    		
    		}
    	}
    		
    	)
    }
     
    showInfo(){
    	let arr=[]
    	let {info}=this.state
    	let that = this
		info.forEach(function(item,i){
			if(i<that.state.num){
				arr.push(<CpInfo info={item}/>)
			}
			
			//console.log(arr)
		})
    	return arr
    }
    
    getMore(){
    	this.setState({
    		num:this.state.num+10
    	})
    }
    componentWillMount(){
   		
   		this.getInfo()
   	}
    render(){
    	return (
    		<div>
			<div className='cp-list'>
				{this.showInfo()}
			</div>
			<button className='btn-getmore' onClick={this.getMore.bind(this)}>查看更多</button>
			
			</div>
        )
    }
}
//定义默认属性
CpListComponent.defaultProps={
		url:"./json/cpinfo.json"
}



export default CpListComponent