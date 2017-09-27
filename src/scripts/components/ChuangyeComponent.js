import TopComponent from './TopComponent'
import LunboComponent from './LunboComponent'
import NavWrapComponent from './NavWrapComponent'
import CpListComponent from './CpListComponent'
class ChunagyeComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <div className="">
               <TopComponent/>
               <LunboComponent/>
               <NavWrapComponent/>
               <CpListComponent/>
               <footer>
				    <ul>
				        <li><a href="/">手机版</a></li>
				        <li><a href="/">桌面版</a></li>
				    </ul>
				    <div className="copyright-box">
				        ©2017 虎嗅网 m.huxiu.com
				    </div>
				</footer>
            </div>
            
        )
    }
}
//定义默认属性
ChunagyeComponent.defaultProps={

}



export default ChunagyeComponent