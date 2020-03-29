/* slider */
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


/* phone screen */
const PHONE = document.getElementById('phone');
PHONE.addEventListener('click',(event) => {
  document.getElementById('screen').classList.toggle('screen-black')
});

const PHONE1 = document.getElementById('phone1');
PHONE1.addEventListener('click',(event) => {
  document.getElementById('screen1').classList.toggle('screen-black');
});

/* MENU  */
const MENU = document.getElementById('menu');


const MENU__toggle = document.getElementById('menu__toggle');
MENU__toggle.addEventListener('click',(event) => {
	document.getElementById('menu').classList.toggle('active-burger');
	document.getElementById('menu-block').classList.toggle('hidden');
	document.getElementById('menu__toggle').style.transform = 'rotate(90deg)';
	document.getElementById('logo').classList.toggle('logo-burger');
	
	
	MENU.addEventListener('click',(event) => {
		if (event.target.tagName == 'A' && document.documentElement.clientWidth < 768){ 
		 
		  document.getElementById('menu-block').classList.add('hidden');
		  document.getElementById('menu__toggle').checked = 0;
		  document.getElementById('logo').classList.remove('logo-burger');
		}
	  });
});
const CLOSE_burger = document.getElementById('menu-block');
CLOSE_burger.addEventListener('click',(event) =>{
	document.getElementById('menu-block').classList.add('hidden');
	document.getElementById('menu__toggle').checked = 0;
	document.getElementById('logo').classList.remove('logo-burger');
});

document.addEventListener('scroll', onScroll);

function onScroll(event){
  const curPos = window.scrollY + 2;
  const sections = document.querySelectorAll('#wrapper>section');
  const links = document.querySelectorAll('#menu a');

  sections.forEach((el) => {
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


/* FORM */

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





/* PORTFOLIO*/
const NAV = document.querySelectorAll('.nav-button button');
NAV.forEach(tag => tag.addEventListener('click',(event) => {
  if (!event.target.classList.contains('active1')){ 
	let navigationElement = document.getElementsByClassName('gallery__item');
	let galleryArray = Array.from(navigationElement);
	let a = galleryArray.map(s => s.outerHTML);
	let k = 1;
	a=a.splice(-k).concat(a);
	document.getElementById('gallery').innerHTML = '';
	document.getElementById('gallery').innerHTML = a.join('');
  };
  NAV.forEach(el => el.classList.remove('active1'));
  event.target.classList.add('active1');
}));

const GALLERY = document.getElementById('gallery');

GALLERY.addEventListener('click',(event) => {
  if (event.target.tagName == 'IMG'){ 
      GALLERY.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    event.target.classList.add('active_img');  
  }

});






