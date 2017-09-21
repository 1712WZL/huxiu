
import Fetch from "../modules/fetch"


class GetArticleComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			
		}
	}
	
	showArticle(){
		let url = "http://localhost:9000/article/relatedArticle/215307"
		Fetch.Get(url).then(res=>{
			return res.json()
		}).then(res=>{
			console.log(res)
			//console.log(res.data.data)
		})
		
	}
	render(){
		return (
			<div>
				{this.showArticle()}
			</div>
		)
	}
}

GetArticleComponent.defaultProps = {
	
}

export default GetArticleComponent