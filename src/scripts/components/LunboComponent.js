
class LunboComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
        
        return (
            
            <div className="banner swiper-container">
   
    <div className="banner_list swiper-wrapper">
		<a href="" className='swiper-slide'><img src="https://img.huxiucdn.com/chuangye/2017/09/12/1505198515586483.jpg?imageView2/1/w/1152/h/648/|imageMogr2/strip/interlace/1/quality/85/format/jpg" alt='车悦宝'/>
	<p>分贝通</p></a>
		<a href="" className='swiper-slide'><img src="https://img.huxiucdn.com/chuangye/2017/09/07/1504768587170525.png?imageView2/1/w/1152/h/648/|imageMogr2/strip/interlace/1/quality/85/format/png" alt='数字联盟可信ID'/>
		<p>数字联盟可信ID</p></a>
		<a href="" className='swiper-slide'><img src="https://img.huxiucdn.com/chuangye/2017/09/06/1504690798923286.png?imageView2/1/w/1152/h/648/|imageMogr2/strip/interlace/1/quality/85/format/png" alt='分贝通'/>
		<p>车悦宝</p></a>
	</div>
	 <div>
        <div className="banner_bg"></div>
        
        
        
        <ul className="point-ul swiper-pagination">
            
        </ul>
    </div>
</div>
        )
    }
   	componentDidMount(){
   		 this.state.swiper=new Swiper(".banner",{ 
            autoplay:3000,
           pagination : '.swiper-pagination',
            effect:'fade'
            

        })
   	}
}
//定义默认属性




export default LunboComponent