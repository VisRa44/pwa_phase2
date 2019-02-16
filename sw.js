/*service worker for any project*/
var cache1="c1";   //cache version(user-defined)
this.addEventListener("install",function(event){
	event.waitUntil(

		caches.open(cache1).then(cache=>{
			cache.addAll([

				"image.jpg","form.css","resume.css"

				])
		})

		);
});

this.addEventListener("fetch",function(event){
	event.respondWith(
		caches.open(cache1).then(function(cache){

			return cache.match(event.request).then(function(res){
				return res|| fetch(event.request).then(function(reqres){
					cache.put(event.request,reqres.clone());
				})
			})
		})

		)
})