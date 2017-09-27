import $ from"jquery";
const getData=(url,cb)=>{
	$.ajax({
		type:"get",
		url:url,
		success:function(data){
			
			cb(data);
		},
		error:function(error){
			url="/teamProject/build"+url
			console.log(url)
			$.ajax({
				type:"get",
				url:url,
				success:function(data){
					
					cb(data);
				}
			});
		}
	});
}

export default getData;
