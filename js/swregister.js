if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js',{

		scope:'./'

	})
	.then(reg=>{                           /*fetch promises syntax*/
		console.log("success");
	})
	.catch(error=>{
		console.log("error");
	});
}