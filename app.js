document.querySelector('#nameInput').addEventListener('keyup', function(e){
	let name = e.target.value
	let nameCount = 0
	for (var i = name.length - 1; i >= 0; i--) {
		nameCount += name.charCodeAt(i)
	}
	
	document.querySelector('#countLabel').innerText = nameCount
})