(function(){
	document.getElementById('logo').addEventListener('click', () => { location.href ='../index.html'});
	document.getElementById('submitBtn').addEventListener('click', () => { location.href ='attendant/admin.html'});
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

/* MODAL SCRIPT Online resource */
const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

    const toggleModal = () => {
        modal.classList.toggle("show-modal");
    }

    const windowOnClick = (newevent) => {
        if (newevent.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);