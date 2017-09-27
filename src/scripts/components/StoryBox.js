

class StoryBox extends React.Component {

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
        	<div className='storybox'>
        		<h2 className='story-title'>24小时</h2>
        		<span className='span-mark b1'></span>
          		<a className="swiper-container hp-moment-ul">
				  <div className="swiper-wrapper 24hour-story">
				    <div className="swiper-slide hp-moment-list">
					    <div className='hp-moment-text'>
					     	风向·标 说:李克强总理今日主持召开国务院常务会议，会议部署进一步促进扩大就业，指出要加大就业促进力度；要求培育就业新增长点 保障重点群体就业；要求新建跨境电商综合试验区，将跨境电商监管过渡期政策延长一年。                               
				     	</div>
				    	<img className='lazy' src='https://img.huxiucdn.com/moment/201707/04/115751404982.jpg'/>
				    </div>
				    <div className="swiper-slide hp-moment-list">
					    <div className='hp-moment-text'>
					     风向·标 说:李克强总理今日主持召开国务院常务会议，会议部署进一步促进扩大就业，指出要加大就业促进力度；要求培育就业新增长点 保障重点群体就业；要求新建跨境电商综合试验区，将跨境电商监管过渡期政策延长一年。                               
					     </div>
					    <img className='lazy' src='https://img.huxiucdn.com/moment/201707/04/115751404982.jpg'/>
				    </div>
				    <div className="swiper-slide hp-moment-list">
					    <div className='hp-moment-text'>
					     	风向·标 说:李克强总理今日主持召开国务院常务会议，会议部署进一步促进扩大就业，指出要加大就业促进力度；要求培育就业新增长点 保障重点群体就业；要求新建跨境电商综合试验区，将跨境电商监管过渡期政策延长一年。                                
				     	</div>
				    	<img className='lazy' src='https://img.huxiucdn.com/moment/201707/04/115751404982.jpg'/>
				    </div>
				  </div>
				</a>
			</div>
        )
    }
componentDidMount(){
        this.state.swiper=new Swiper(".hp-moment-ul",{ 
            autoplay:3000,
            direction : 'vertical',
            height:97,
            
           

        })
    }
}

export default StoryBox 