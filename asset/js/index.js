
//scroll effect
function reveal() {
	let reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 150;

		if (elementTop <= windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

//mouse effect 
function mouseEffect(e) {
	let div = document.createElement("div");
	div.setAttribute("class", "circle");
	document.body.appendChild(div);

	div.style.left = e.pageX + 'px';
	div.style.top = e.pageY + 'px';
	div.style.transition = "all 1.5s ease 0s";
	div.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

	div.style.left = div.offsetLeft - 30 + 'px';
	div.style.top = div.offsetTop - 30 + 'px';
	div.style.width = '25px';
	div.style.height = '25px';
	div.opacity = 0;

	setTimeout(function () {
		document.body.removeChild(div);
	}, 1500);
}

//nav
function nav() {
	let home = document.querySelector(".home");
	let nav = document.querySelector("nav");
	let height = home.offsetHeight;
	let top = home.getBoundingClientRect().top;

	if (top + height <= 60) {
		nav.classList.add("on")
	} else {
		nav.classList.remove("on")
	}
}

// parallax
function parallax() {
	let ele = document.querySelectorAll('.parallax')
	if ('undefined' !== ele && ele.length > 0) {
		ele.forEach(function (item) {
			let y = window.innerHeight - item.getBoundingClientRect().top;
			if (y > 0) {
				if (item.classList.contains("parallax--top")) {
					item.style.transform = 'translateY(-' + (0.1 * y) + 'px )'
				} else if (item.classList.contains("parallax--bottom")) {
					item.style.transform = 'translateY(' + (0.1 * y) + 'px )'
				}
			}
		})
	}
}

function popup() {

	let close = document.querySelector(".close");
	let popup = document.querySelector(".popup-bg")

	close.addEventListener("click", function () {
		popup.style.display = "none"
	})
}



reveal();
popup();

//window.addEventListener("mousemove", mouseEffect)
window.addEventListener('scroll', function () {
	reveal();
	nav();
	parallax()
});


function appHeight() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
};

appHeight();
window.addEventListener('resize', appHeight);

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}