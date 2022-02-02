
const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Retouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  } 

//Hamburger//

window.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.header-nav'),
    navItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-switch-on');
    navMenu.classList.toggle('header-nav-active');
    });
    
    navItem.forEach(item => {
    item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-switch-on');
    navMenu.classList.toggle('header-nav-active');
         })
    })      
})

//Смена изображений в секции Portfolio//

const portfolioBtn = document.querySelector('.portf-btn');
const portfolioBtnActive = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-item');
const portfolioBtns = document.querySelector('.portfolio-buttons'); 

const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
function preloadImages() {
    seasons.forEach((item) => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./img/${item}/${i}.jpg`;
          }
    })    
  }
preloadImages();

function changeImage(event) {
    if(event.target.classList.contains('portf-btn')) {       
        portfolioImages.forEach((img, index) => img.src = `./img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
}
portfolioBtns.addEventListener('click', changeImage);


function changeActive(event) {
    portfolioBtnActive.forEach((i) => i.classList.remove('button-switch-on-autumn'));
    event.target.classList.add('button-switch-on-autumn');
}

portfolioBtnActive.forEach((item) => item.addEventListener('click', changeActive));

//Функция перевода страницы//

const hsi = document.querySelectorAll('.switch-lang-lang');

function changeActiveLang(event) {
    hsi.forEach((i) => i.classList.remove('lang-hover'));
    event.target.classList.add('lang-hover'); 
    getTranslate(event.target.textContent);
    lang=event.target.textContent;
    console.log(lang);
}

hsi.forEach((item) => item.addEventListener('click', changeActiveLang));

const tr = document.querySelectorAll('[data-i18n]');
function getTranslate(lang){
    tr.forEach((item) => {
        for(let q in i18Obj[lang]) {
            if(item.dataset.i18n == q){
                if (item.placeholder) {
                    item.placeholder = i18Obj[lang][q];
                  }else{                
                    item.textContent = i18Obj[lang][q];}
            }            
        }
    })
}

//Переключение светлой и тёмной темы//

const sections = ['body','.h2-title-line', '.header-nav', '.nav-link','section-skills','.section-portfolio','.section-video','.section-price','.h2-title-contacts','.portfolio-btn', '.button-switch-on-autumn', '.footer-copyright', '.footer-year']; 
const icon = document.querySelector('.header-switch-theme');
const svg =  document.querySelector('.header-switch-theme');
function themeToggle(event){
    sections.forEach((item)=> {
        let itemThemes = document.querySelectorAll(item);
        itemThemes.forEach((i) => {
            i.classList.toggle('light-theme');
        })
    })
    icon.classList.toggle('active');
    if(!icon.classList.contains('active')){
        svg.setAttribute('src', './img/light.svg');
    }else{
        svg.setAttribute('src', './img/dark.svg');
    }
    if (theme === 'light')theme = 'dark';
    else theme = 'light'
}

icon.addEventListener('click', themeToggle);

//Дополнительный функционал: данные хранятся в local storage//

let lang = 'en';
let theme = 'dark';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const ls = localStorage.getItem('lang');
      getTranslate(ls);
      hsi.forEach((i) => {
        i.classList.remove('lang-hover')
        if (i.textContent == ls){ i.classList.add('lang-hover')}
        });
        lang=ls;    }

    if(localStorage.getItem('theme')) {
        const th = localStorage.getItem('theme');
        if (th == "dark"){
            themeToggle();
        }
        theme=th;
      }
  }
  window.addEventListener('load', getLocalStorage)

  //Дополнительный функционал: сложные эффекты для кнопок. Эфеект Bubbly Button//
  
  let animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  let bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
const enLang = document.querySelector(".en");

function getTranslate(lang) {
  const language = document.querySelectorAll("[data-i18]");
  language.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];
  });
}

ruLang.addEventListener("click", () => {
  getTranslate("ru");
});
enLang.addEventListener("click", () => {
  getTranslate("en");
});
