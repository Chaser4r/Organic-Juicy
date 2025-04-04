// - - - - - Burger-menu - - - - -

const menuIcon = document.querySelector('.menu-icon'),
  header = document.querySelector('.header');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon_active');
  header.classList.toggle('header_mobile');
  document.body.classList.toggle('no-scroll');
  header.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 532) {
    menuIcon.classList.remove('menu-icon_active');
    header.classList.remove('header_mobile');
    document.body.classList.remove('no-scroll');
  }
})


// - - - - - Slider-arrows - - - - -

const sliderArrows = document.querySelector('.slider-arrows'),
  imgsArrows = sliderArrows.querySelectorAll('.slider-arrows__img'),
  prev = sliderArrows.querySelector('.slider-arrows__arrow-left'),
  next = sliderArrows.querySelector('.slider-arrows__arrow-right')

let activeImgArrowIndex = 0;

showImgArrows(0);

prev.addEventListener('click', () => showImgArrows(-1));
next.addEventListener('click', () => showImgArrows(1));
sliderArrows.addEventListener('click', e => e.target.tagName === 'IMG' && showImgArrows(1));

function showImgArrows(num) {
  activeImgArrowIndex += num;

  if (activeImgArrowIndex < 0) {
    activeImgArrowIndex = imgsArrows.length - 1;
  } else if (activeImgArrowIndex > imgsArrows.length - 1) {
    activeImgArrowIndex = 0;
  }

  imgsArrows.forEach((img, index) => {
    switch (index === activeImgArrowIndex) {
      case true:
        img.style.display = 'block';
        break;

      case false:
        img.style.display = 'none';
    }   
  })
}


// - - - - - Slider-dots - - - - -

const sliderDots = document.querySelector('.slider-dots'),
  imgsDots = sliderDots.querySelectorAll('.slider-dots__img'),
  navDotsWrap = sliderDots.querySelector('.slider-dots__nav'),
  navDots = [];

for (let i = 0; i < imgsDots.length; i++) {
  const dot = document.createElement('button');
  dot.classList.add('slider-dots__nav-item');
  dot.addEventListener('click', () => showImgDots(i));

  navDotsWrap.append(dot);
  navDots.push(dot);
}

let activeImgDotsIndex = 0;

showImgDots(0);

sliderDots.addEventListener('click', e => e.target.tagName === 'IMG' && showImgDots(nextImgIndex()));

function nextImgIndex() {
  activeImgDotsIndex++;
  (activeImgDotsIndex > imgsDots.length - 1) && (activeImgDotsIndex = 0);
  
  return activeImgDotsIndex;
}

function showImgDots(index) {
  activeImgDotsIndex = index;

  navDots.forEach((dot, index) => {
    switch (activeImgDotsIndex === index) {
      case true: 
        dot.classList.add('slider-dots__nav-item_active');
        break;
        
      case false:
        dot.classList.remove('slider-dots__nav-item_active')
    }
  })

  imgsDots.forEach((img, index) => {
    switch (index === activeImgDotsIndex) {
      case true:
        img.style.display = 'block';
        break;

      case false:
        img.style.display = 'none';
    }   
  })
}

