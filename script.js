      /* Индекс слайда по умолчанию */
      var slideIndex = 1;
      showSlides(slideIndex);
      
      /* Функция увеличивает индекс на 1, показывает следующй слайд*/
      function plusSlide() {
          showSlides(slideIndex += 1);
      }
      
      /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
      function minusSlide() {
          showSlides(slideIndex -= 1);  
      }
      
      /* Устанавливает текущий слайд */
      function currentSlide(n) {
          showSlides(slideIndex = n);
      }
      
      /* Основная функция сладера */
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item");
        
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
       
        slides[slideIndex - 1].style.display = "block";
       
      }




const MENU = document.getElementById('menu');


MENU.addEventListener('click',(event) => {
  if (event.target.tagName == 'A'){ 
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  }
});


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

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
  a.sort(function() {
    return .5 - Math.random();
  });
  
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




