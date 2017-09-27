

import store from "./store"

const actions = {
	changeClick(){
		//console.log("4.actions的方法触发之后创建带有标识属性的action对象，调用store.dispatch方法，交由reducer来处理")
		let action = {
			type :'IS_CLICK'
		}
		store.dispatch(action)
	},
	changeUserInfo(info){
		store.dispatch({
			type:"CHANGE_USER_INFO",
			info:info
		})
	},
	exit(){
		store.dispatch({
			type:'EXIT'
		})
	}
}

export default actions
