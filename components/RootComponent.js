
class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
        console.log(this)
        return (
            <div className="">
               {this.props.children}
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={

}



export default RootComponent