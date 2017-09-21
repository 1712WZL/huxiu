
import 'whatwg-fetch'
import 'es6-promise'
const Get = (url,params)=>{

    
    let result = fetch(url,{
        credentials:'include',
        headers:{
            'Accept':'*/*'
        }
    })
    return result
}

export default Get
