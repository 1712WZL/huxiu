
import HeadComponent from "./HeadComponent"
class ActiveComponent extends React.Component{
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
            	<HeadComponent/>
				
			    active
			</div>
		)
	}
}

ActiveComponent.defaultProps = {
	
}

export default ActiveComponent