function slidePlugin(activeSlide) {
	const slides = document.querySelectorAll('.slide')

	slides[activeSlide].classList.add('active')

	for (const el of slides) {
		el.addEventListener('click', () => {
			clearActiveClass()
			el.classList.add('active')
		})
	}

	function clearActiveClass() {
		slides.forEach((el) => {
			el.classList.remove('active')
		})
	}
}

slidePlugin(1)