import PlaceHolderLine from './PlaceHolderLine'
import ArticleWrap from './ArticleWrap'

class BannerComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          swiper:null
        }
    }
    
    componentWillMount(){
        
    }
    render(){
     
        return (
          <div>
            <div className="swiper-container banner">
			  <div className="swiper-wrapper banner-wrapper">
			    <div className="swiper-slide">
			    	<span className="mask"></span>
			    	<p className="banner-info">我们从游戏来，我们到游戏去</p>
			    	<img src='https://img.huxiucdn.com/article/cover/201709/22/232321729896.jpg?imageView2/1/w/1350/h/1011/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/>
			    </div>
			    <div className="swiper-slide">
			   		<span className="mask"></span>
			    	<p className="banner-info">阿里VS京东，“剁手党俱乐部”哪家强？</p>
			    	<img src='https://img.huxiucdn.com/article/cover/201612/26/070903778275.jpg?imageView2/1/w/1350/h/1011/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/>
			    </div>
			    <div className="swiper-slide">
			    	<span className="mask"></span>
			    	<p className='banner-info'>腾讯前CTO张志东：腾讯是如何避免老化的</p>
			    	<img src='https://img.huxiucdn.com/article/cover/201709/22/205045869165.jpg?imageView2/1/w/1350/h/1011/|imageMogr2/strip/interlace/1/quality/85/format/jpg'/>
			    </div>
			  </div>
			  <div className="swiper-pagination"></div>
			</div>
			<PlaceHolderLine/>
			<ArticleWrap/>
		</div>
        )
    }
    componentDidMount(){
        this.state.swiper=new Swiper(".banner",{ 
            pagination : '.swiper-pagination',
            autoplay:5000,
            direction:"horizontal"

        })
    }
}


//定义默认属性
BannerComponent.defaultProps={

}



export default BannerComponent