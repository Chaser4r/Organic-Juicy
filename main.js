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
    switch(index === activeImgArrowIndex) {
      case false:
        img.style.display = 'none';
        break;

      case true:
        img.style.display = 'block';
    }   
  })
}


// - - - - - Slider-dots - - - - -

const sliderDots = document.querySelector('.slider-dots'),
  imgsDots = sliderDots.querySelectorAll('.slider-dots__img'),
  navDots = sliderDots.querySelectorAll('.slider-dots__nav-item')

let activeImgDotsIndex = 0;

showImgDots(0);

navDots.forEach((dot, index) => {
  dot.addEventListener('click', () => showImgDots(index))
})

sliderDots.addEventListener('click', e => e.target.tagName === 'IMG' && showImgDots(nextImgIndex()));

function nextImgIndex() {
  activeImgDotsIndex++;
  (activeImgDotsIndex > imgsDots.length - 1) && (activeImgDotsIndex = 0);
  
  return activeImgDotsIndex;
}

function showImgDots(index) {
  activeImgDotsIndex = index;

  navDots.forEach((dot, index) => {
    if (activeImgDotsIndex === index) {
      dot.classList.add('slider-dots__nav-item_active')
    } else {
      dot.classList.remove('slider-dots__nav-item_active')
    }
  })

  imgsDots.forEach((img, index) => {
    switch(index === activeImgDotsIndex) {
      case false:
        img.style.display = 'none';
        break;

      case true:
        img.style.display = 'block';
    }   
  })
}

