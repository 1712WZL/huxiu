import PlaceHolderLine from './PlaceHolderLine'
import ArticleWrap from './ArticleWrap'
import AdNewsComponent from './AdNewsComponent'

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
			  <div className="swiper-wrapper">
			    <div className="swiper-slide">
			    <p className="banner-info">禁用燃油车大势所趋,特斯拉或许是2030年的苹果</p>
			    </div>
			    <div className="swiper-slide">
			    <p className="banner-info">阿里大文娱</p>
			    </div>
			    <div className="swiper-slide">
			    <p className='banner-info'>"吃鸡"在国内的火爆</p>
			    </div>
			  </div>
			  <div className="swiper-pagination"></div>
			</div>
	<PlaceHolderLine/>
	<ArticleWrap/>
	<AdNewsComponent/>
	<AdNewsComponent/>
	<AdNewsComponent/>
</div>
        )
    }
    componentDidMount(){
        this.state.swiper=new Swiper(".banner",{ 
            pagination : '.swiper-pagination',
            autoplay:3000,
            loop:true,

        })
    }
}


//定义默认属性
BannerComponent.defaultProps={

}



export default BannerComponent