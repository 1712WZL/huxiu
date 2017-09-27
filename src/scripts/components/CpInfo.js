
class CpInfo extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    render(){
    	return (
			<section className='cp-info'>
			   <div className='cp-logo'>
					<a href=''>
					  <img src={this.props.info.imgSrc}/>
					</a>
			   </div>
			   <div className='cp-detail'>
			   		<div className='cp-name'>
			   			<a href=''>
			   			{this.props.info.name}
			   			</a>
			   		</div>
			   		<div className='cp-tj-time'>
			   		{this.props.info.time}
			   		</div>
			   </div>
			   <div className='cp-intro'>
			             {this.props.info.intro}            
			   
			   </div>
			  
			</section>
        )
    }
    
    componentDidMount(){
   		
   			
   		
   	}
}
//定义默认属性
CpInfo.defaultProps={

}



export default CpInfo