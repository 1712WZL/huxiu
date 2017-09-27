
//第一个参数可以设置状态的默认值，主要需要返回状态,返回值是什么，状态就是什么
const reducer = (state={isClick:false,userInfo:{name:''}},action)=>{
	
	switch(action.type){
		case 'IS_CLICK':
			//console.log('5.reducer接收到action后做出判断并且返回新数据')
			state.isClick=!state.isClick;
			return state;
			break;
		case 'CHANGE_USER_INFO':
			state.userInfo=action.info;
			return state;
			break;
		case 'EXIT':
			state.userInfo = {name:''}
			return state;
			break;
		default :
			//console.log('1.store里挂载了数据')
			return state;
			break;
		
	}
	
}

export default reducer