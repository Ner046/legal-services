const slider = document.querySelectorAll('[data-quote]');
let slideIndex = 0;

const circles = document.querySelectorAll('[data-circle]');
let circleIndex = 0;


initalizeSlider();
initalizeCircle();
circleButton();
arrowButtons();



function initalizeSlider(){
    if(slider.length > 0){
      slider[slideIndex].classList.add("active")
    }
}


function showSlide(index){

    let newIndex = index;

    if(newIndex >= slider.length){
        newIndex = 0;
    }

    else if(newIndex < 0){
        newIndex = slider.length - 1
    }

    slideIndex = newIndex;

    slider.forEach(slide=>{
        slide.classList.remove("active")
    })

    slider[slideIndex].classList.add("active")

     circles.forEach(circle=>{
        circle.classList.remove("active")
    })
    
    circles[slideIndex].classList.add("active")
    circles[slideIndex].setAttribute('aria-current', 'true');
}


function arrowButtons(){
    const prevBtn = document.querySelector('[data-arrow="prev"]')
    const nextBtn = document.querySelector('[data-arrow="next"]')

    if(prevBtn && nextBtn){
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex)
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}

function initalizeCircle(){
    
    circles[circleIndex].classList.add("active")
}

function circleButton(){
    
        circles.forEach(circle=>{
        circle.addEventListener('click', (e)=>{
        const val = Number(e.target.dataset.circle);
        showSlide(val)
        })
        
    })
    
}