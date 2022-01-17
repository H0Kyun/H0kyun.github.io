const bookBtn = document.querySelector('.bookmark-btt');
const section = document.querySelector('.sidesection');
const label = document.querySelector('.sidelabel');

bookBtn.addEventListener('click', function(){
    section.style.left = 0;
    label.style.opacity = 0;
})

bookBtn.addEventListener('blur', function(){
    section.style.left = '-200px';
    label.style.opacity = 1;
})