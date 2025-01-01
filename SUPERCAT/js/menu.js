let menu = document.querySelector('.menu-visible')
let button = document.querySelector('.menu-btn')

button.addEventListener('click', function () {
	if (button.classList.contains('btn-closed')) {
	  console.log("Закрыли!")
	  button.classList.add('btn-closed')
	  menu.classList.remove('menu-visible_closed')
	} else {
	  console.log("Открыли!")
	  button.classList.remove('btn-closed')
	  menu.classList.add('menu-visible_closed')
	}
	button.classList.toggle('btn-closed')
	menu.classList.toggle('menu-visible_closed')
})
