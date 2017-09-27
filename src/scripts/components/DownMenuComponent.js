import $ from "jquery"

class DownMenuComponent extends React.Component{
	constructor(props,context){
		super(props.context)
		this.state={
			
		}
	}
	render(){
		return (
			<div className="area-box ">
			
			        	<h2 className="login-title text-center">选择国家和地区</h2>
						<ul className="area-ul">
				        <li className="select-area"><span>中国(+86)</span><i className="selected-i"></i></li>
				        <div className="area-order" id="area-order-A">A</div>
				        <li>阿尔巴尼亚(+355)</li>
				        <li>阿尔及利亚(+213)</li>
				        <li>阿富汗(+93)</li>
				        <li>阿根廷(+54)</li>
				        <li>爱尔兰(+353)</li>
				        <li>埃及(+20)</li>
				        <li>埃塞俄比亚(+251)</li>
				        <li>爱沙尼亚(+372)</li>
				        <li>阿拉伯联合酋长国(+971)</li>
				        <li>阿鲁巴(+297)</li>
				        <li>阿曼(+968)</li>
				        <li>安道尔(+376)</li>
				        <li>安哥拉(+244)</li>
				        <li>安圭拉(+1264)</li>
				        <li>安提瓜和巴布达(+1268)</li>
				        <li>澳大利亚(+61)</li>
				        <li>奥地利(+43)</li>
				        <li>阿塞拜疆(+994)</li>
			       
			        
			        
			        	<div>B</div>
				        <li>巴巴多斯(+1246)</li>
				        <li>巴布亚新几内亚(+675)</li>
				        <li>巴哈马(+1242)</li>
				        <li>白俄罗斯(+375)</li>
				        <li>百慕大(+1441)</li>
				        <li>巴基斯坦(+92)</li>
				        <li>巴拉圭(+595)</li>
				        <li>巴林(+973)</li>
				        <li>巴拿马(+507)</li>
				        <li>保加利亚(+359)</li>
				        <li>巴西(+55)</li>
				        <li>北马里亚纳群岛(+1670)</li>
				        <li>贝宁(+229)</li>
				        <li>比利时(+32)</li>
				        <li>冰岛(+354)</li>
				        <li>博茨瓦纳(+267)</li>
				        <li>波兰(+48)</li>
				        <li>玻利维亚(+591)</li>
				        <li>伯利兹(+501)</li>
				        <li>波斯尼亚和黑塞哥维那(+387)</li>
				        <li>不丹(+975)</li>
				        <li>布基拉法索(+226)</li>
				        <li>布隆迪(+257)</li>
			       
			        	<div>C</div>
					        <li>朝鲜(+850)</li>
					        <li>赤道几内亚(+240)</li>
			       
			        	 <div>D</div>
				        <li>丹麦(+45)</li>
				        <li>德国(+49)</li>
				        <li>东帝汶(+670)</li>
				        <li>多哥(+228)</li>
				        <li>多米尼加共和国(+1809)</li>
				        <li>多米尼克(+1767)</li>
			    	
			    
			    
			
        
        
        
       
        <div>E</div>
        <li>厄瓜多尔(+593)</li>
        <li>厄立特里亚(+291)</li>
        <li>俄罗斯(+7)</li>
        <div>F</div>
        <li>法国(+33)</li>
        <li>法罗群岛(+298)</li>
        <li>梵蒂冈(+379)</li>
        <li>法属波利尼西亚(+689)</li>
        <li>法属圣马丁(+1599)</li>
        <li>斐济(+679)</li>
        <li>菲律宾(+63)</li>
        <li>芬兰(+358)</li>
        <li>佛得角(+238)</li>
        <li>福克兰群岛(+500)</li>
        <div>G</div>
        <li>冈比亚(+220)</li>
        <li>刚果（布）(+242)</li>
        <li>刚果（金）(+243)</li>
        <li>格陵兰(+299)</li>
        <li>格林纳达(+1473)</li>
        <li>格鲁吉亚(+995)</li>
        <li>哥伦比亚(+57)</li>
        <li>哥斯达黎加(+506)</li>
        <li>关岛(+1671)</li>
        <li>古巴(+53)</li>
        <li>圭亚那(+592)</li>
        <div>H</div>
        <li>海地(+509)</li>
        <li>韩国(+82)</li>
        <li>哈萨克斯坦(+7)</li>
        <li>黑山(+382)</li>
        <li>荷兰(+31)</li>
        <li>荷属安的列斯群岛(+599)</li>
        <li>洪都拉斯(+504)</li>
        <div>J</div>
        <li>加纳(+233)</li>
        <li>加拿大(+1)</li>
        <li>柬埔寨(+855)</li>
        <li>加蓬(+241)</li>
        <li>吉布提(+253)</li>
        <li>捷克共和国(+420)</li>
        <li>吉尔吉斯斯坦(+996)</li>
        <li>基里巴斯(+686)</li>
        <li>津巴布韦(+263)</li>
        <li>几内亚(+224)</li>
        <li>几内亚比绍(+245)</li>
        <div>K</div>
        <li>开曼群岛(+1345)</li>
        <li>喀麦隆(+237)</li>
        <li>卡塔尔(+974)</li>
        <li>科科斯（基林）	群岛(+61)</li>
        <li>克罗地亚(+385)</li>
        <li>科摩罗(+269)</li>
        <li>肯尼亚(+254)</li>
        <li>科特迪瓦(+225)</li>
        <li>科威特(+965)</li>
        <li>库克群岛(+682)</li>
        <div>L</div>
        <li>莱索托(+266)</li>
        <li>老挝(+856)</li>
        <li>拉脱维亚(+371)</li>
        <li>黎巴嫩(+961)</li>
        <li>利比里亚(+231)</li>
        <li>利比亚(+218)</li>
        <li>列支敦士登(+423)</li>
        <li>立陶宛(+370)</li>
        <li>罗马尼亚(+40)</li>
        <li>卢森堡(+352)</li>
        <li>卢旺达(+250)</li>
        <div>M</div>
        <li>马达加斯加(+261)</li>
        <li>马尔代夫(+960)</li>
        <li>马耳他(+356)</li>
        <li>马来西亚(+60)</li>
        <li>马拉维(+265)</li>
        <li>马里(+223)</li>
        <li>曼岛(+44)</li>
        <li>毛里求斯(+230)</li>
        <li>毛里塔尼亚(+222)</li>
        <li>马其顿(+389)</li>
        <li>马绍尔群岛(+692)</li>
        <li>马约特(+262)</li>
        <li>美国(+1)</li>
        <li>美属萨摩亚(+1684)</li>
        <li>美属维尔京群岛(+1340)</li>
        <li>蒙古(+976)</li>
        <li>孟加拉国(+880)</li>
        <li>蒙特塞拉特(+1664)</li>
        <li>缅甸(+95)</li>
        <li>密克罗尼西亚(+691)</li>
        <li>秘鲁(+51)</li>
        <li>摩尔多瓦(+373)</li>
        <li>摩洛哥(+212)</li>
        <li>摩纳哥(+377)</li>
        <li>莫桑比克(+258)</li>
        <li>墨西哥(+52)</li>
        <div>N</div>
        <li>纳米比亚(+264)</li>
        <li>南非(+27)</li>
        <li>南极洲(+672)</li>
        <li>瑙鲁(+674)</li>
        <li>尼泊尔(+977)</li>
        <li>尼加拉瓜(+505)</li>
        <li>尼日尔(+227)</li>
        <li>尼日利亚(+234)</li>
        <li>纽埃(+683)</li>
        <li>挪威(+47)</li>
        <div>P</div>
        <li>帕劳(+680)</li>
        <li>皮特凯恩群岛(+870)</li>
        <li>葡萄牙(+351)</li>
        <div>R</div>
        <li>日本(+81)</li>
        <li>瑞典(+46)</li>
        <li>瑞士(+41)</li>
        <div>S</div>
        <li>萨尔瓦多(+503)</li>
        <li>塞尔维亚(+381)</li>
        <li>塞拉利昂(+232)</li>
        <li>塞内加尔(+221)</li>
        <li>塞浦路斯(+357)</li>
        <li>塞舌尔(+248)</li>
        <li>萨摩亚(+685)</li>
        <li>沙特阿拉伯(+966)</li>
        <li>圣巴泰勒米(+590)</li>
        <li>圣诞岛(+61)</li>
        <li>圣多美和普林西比(+239)</li>
        <li>圣赫勒拿(+290)</li>
        <li>圣基茨和尼维斯(+1869)</li>
        <li>圣卢西亚(+1758)</li>
        <li>圣马力诺(+378)</li>
        <li>圣皮埃尔和密克隆群岛(+508)</li>
        <li>圣文森特和格林纳丁斯(+1784)</li>
        <li>斯里兰卡(+94)</li>
        <li>斯洛伐克(+421)</li>
        <li>斯洛文尼亚(+386)</li>
        <li>斯威士兰(+268)</li>
        <li>苏丹(+249)</li>
        <li>苏里南(+597)</li>
        <li>所罗门群岛(+677)</li>
        <li>索马里(+252)</li>
        <div>T</div>
        <li>泰国(+66)</li>
        <li>台湾(+886)</li>
        <li>塔吉克斯坦(+992)</li>
        <li>汤加(+676)</li>
        <li>坦桑尼亚(+255)</li>
        <li>特克斯和凯科斯群岛(+1649)</li>
        <li>特立尼达和多巴哥(+1868)</li>
        <li>土耳其(+90)</li>
        <li>土库曼斯坦(+993)</li>
        <li>突尼斯(+216)</li>
        <li>托克劳(+690)</li>
        <li>图瓦卢(+688)</li>
        <div>W</div>
        <li>瓦利斯和富图纳(+681)</li>
        <li>瓦努阿图(+678)</li>
        <li>危地马拉(+502)</li>
        <li>委内瑞拉(+58)</li>
        <li>文莱(+673)</li>
        <li>乌干达(+256)</li>
        <li>乌克兰(+380)</li>
        <li>乌拉圭(+598)</li>
        <li>乌兹别克斯坦(+998)</li>
        <div>X</div>
        <li>西班牙(+34)</li>
        <li>希腊(+30)</li>
        <li>新加坡(+65)</li>
        <li>新喀里多尼亚(+687)</li>
        <li>新西兰(+64)</li>
        <li>匈牙利(+36)</li>
        <li>叙利亚(+963)</li>
        <div>Y</div>
        <li>牙买加(+1876)</li>
        <li>亚美尼亚(+374)</li>
        <li>也门(+967)</li>
        <li>意大利(+39)</li>
        <li>伊拉克(+964)</li>
        <li>伊朗(+98)</li>
        <li>印度(+91)</li>
        <li>印度尼西亚(+62)</li>
        <li>英国(+44)</li>
        <li>英属维尔京群岛(+1284)</li>
        <li>以色列(+972)</li>
        <li>约旦(+962)</li>
        <li>越南(+84)</li>
        <div>Z</div>
        <li>赞比亚(+260)</li>
        <li>乍得(+235)</li>
        <li>直布罗陀(+350)</li>
        <li>智利(+56)</li>
        <li>中非共和国(+236)</li>
        <li>中国(+86)</li>
        <li>中国香港特别行政区(+852)</li>
        <li>中国澳门特别行政区(+853)</li>
        </ul>
        <ul className="control-box text-center">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>U</li>
            <li>V</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
        </ul>
    </div>
		)
	}
}


export default DownMenuComponent;