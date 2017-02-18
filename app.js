document.querySelector('#nameInput').addEventListener('input', function(e){
	let name = e.target.value
	let nameCount = 0
	name.forEach(function(s){
		nameCount += s
	})
	document.querySelector('#countLabel').value = nameCount
})