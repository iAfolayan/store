(function(){
	document.getElementById('logo').addEventListener('click', () => { location.href ='../index.html'});
})();


const slideMobileMenu = () => {
		document.querySelector('#menuDrop').classList.toggle("showMenu");
	}

window.onclick = (event) => {
	if (!event.target.matches('.menuDropContent') && !event.target.matches('img')) {
		if (document.querySelector('.menuDropContent').classList.contains('showMenu')) {
			document.querySelector('.menuDropContent').classList.remove('showMenu');
		}
		}
}

document.querySelector('.mobileMenu').addEventListener("click", slideMobileMenu);
