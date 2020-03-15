var slides = document.getElementById('slideshow');

var imagesColection = [
	'a1.jpg',
	'a2.jpg',
	'a3.jpg'
];
var prev = document.getElementById('prev');
var nxt = document.getElementById('next');


prev.addEventListener('click', changeImg);
nxt.addEventListener('click', changeImg);
function changeImg() {

	var newImg = document.createElement('img');
	newImg.src = imagesColection[Math.floor(Math.random() * imagesColection.length )];
	slides.removeChild(slides.firstElementChild);
	slides.appendChild(newImg);
}

