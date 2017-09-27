

import $ from 'jquery'
class Industry extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    render(){
    	return (
			<div className="cy-tag-wrap cy-tag-industry">
   			 <div className="cy-tag-list cy-tag-industry">
        		<ul>
         			<li data-id="" className="active" data-type="tag">全部</li>
                    <li data-id="1" data-type="tag">医疗健康</li>
                    <li data-id="2" data-type="tag">消费生活</li>
                    <li data-id="3" data-type="tag">企业服务</li>
                    <li data-id="4" data-type="tag">社交</li>
                    <li data-id="5" data-type="tag">媒体资讯</li>
                    <li data-id="6" data-type="tag">房产</li>
                    <li data-id="7" data-type="tag">金融投资</li>
                    <li data-id="8" data-type="tag">旅游</li>
                    <li data-id="9" data-type="tag">法律</li>
                    <li data-id="10" data-type="tag">汽车</li>
                    <li data-id="11" data-type="tag">教育</li>
                    <li data-id="12" data-type="tag">工具软件</li>
                    <li data-id="13" data-type="tag">电子商务</li>
                    <li data-id="14" data-type="tag">智能硬件</li>
                    <li data-id="15" data-type="tag">招聘求职</li>
                    <li data-id="16" data-type="tag">物流</li>
                    <li data-id="17" data-type="tag">文化娱乐</li>
                    <li data-id="18" data-type="tag">广告营销</li>
                    <li data-id="22" data-type="tag">云计算</li>
                    <li data-id="23" data-type="tag">游戏动漫</li>
                    <li data-id="27" data-type="tag">制造业</li>
                    <li data-id="29" data-type="tag">体育</li>
                    <li data-id="34" data-type="tag">安全</li>
                    <li data-id="40" data-type="tag">社区</li>
                    <li data-id="41" data-type="tag">农业</li>
                    <li data-id="43" data-type="tag">其他</li>
                </ul>
   			 </div>
			</div> 
        
        )
    }
    
    componentDidMount(){
   		
   			
   		
   	}
}
//定义默认属性
Industry.defaultProps={

}



export default Industry