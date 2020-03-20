let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active-slide', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active-slide');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.carousel');
swipedetect(el);



const MENU = document.getElementById('menu');


MENU.addEventListener('click',(event) => {
  if (event.target.tagName == 'A'){ 
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  }
});



const GALLERY = document.getElementById('gallery');

GALLERY.addEventListener('click',(event) => {
  if (event.target.tagName == 'IMG'){ 
      GALLERY.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    event.target.classList.add('active_img');
    
  }

});







const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-button');
BUTTON.addEventListener('click',(event) => {
  const name = document.getElementById('name').value.toString();
  const email = document.getElementById('Email').value.toString();
  const subject1 = document.getElementById('subject1').value.toString();
  const subject2 = document.getElementById('subject2').value.toString();
  if (name !== null && name.length == 0, email !== null && email.length == 0){
      return false;
  }else{ 
   
  document.getElementById('message-block').classList.remove('hidden');
  if (subject1 != null && subject1.length == 0){
    document.getElementById('not-topic').classList.remove('hidden');
    document.getElementById('topic').classList.add('hidden');
    
  }else{ 
    document.getElementById('result1').innerText = subject1;
  }
  if (subject2 != null && subject2.length == 0){
    document.getElementById('not-description').classList.remove('hidden');
    document.getElementById('description').classList.add('hidden');
    
  }else{ 
    document.getElementById('result2').innerText = subject2;
  }
  
}
event.preventDefault();
});
CLOSE_BUTTON.addEventListener('click',(event) => {
 
  document.getElementById('message-block').classList.add('hidden');
 
  window.location.reload();
});




const NAV = document.getElementById('nav');
let navigationElement = document.getElementsByClassName('gallery__item');
let galleryArray = Array.from(navigationElement);
let a = galleryArray.map(s => s.outerHTML);
NAV.addEventListener('click',(event) => {
  if (event.target.tagName == 'button'){ 
    NAV.querySelectorAll('button').forEach(el => el.classList.remove('active1'));
    event.target.classList.add('active1');
  }
  let k = 1;
  a=a.splice(-k).concat(a);
  
  document.getElementById('gallery').innerHTML = '';
  document.getElementById('gallery').innerHTML = a.join('');

});

const PHONE = document.getElementById('phone');

PHONE.addEventListener('click',(event) => {
 
  document.getElementById('screen').classList.toggle('screen-black');

});

const PHONE1 = document.getElementById('phone1');

PHONE1.addEventListener('click',(event) => {
  document.getElementById('screen1').classList.toggle('screen-black');
  
});


document.addEventListener('scroll', onScroll);

function onScroll(event){
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('#wrapper>section');
  const links = document.querySelectorAll('#menu a');

  divs.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
          a.classList.add('active');
          
        }
      })
    }
  });
}


