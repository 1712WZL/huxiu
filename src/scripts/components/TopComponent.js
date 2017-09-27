
class TopComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <div>
               <div className='topwrap'>
               <div className='top'>
               <a href='/' className='logo-box'></a>
               </div>
               </div>
            </div>
        )
    }
}
//定义默认属性
TopComponent.defaultProps={

}



export default TopComponent