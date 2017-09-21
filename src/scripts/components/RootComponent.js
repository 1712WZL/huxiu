import HeadComponent from './HeadComponent';
import MenuComponent from './MenuComponent';
class RootComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		this.state={
			
		}
	}
	render(){
		return (
			<div>
				<HeadComponent/>
				
				<MenuComponent/>
			</div>
		)
	}
	
};

export default RootComponent;


