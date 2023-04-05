const container = document.querySelector('.container');
const imgContainer = document.querySelector('.img-container');
const imgContainer1 = document.querySelector('.img-container1');
const imgContainer2 = document.querySelector('.img-container2');
const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');
const slider = document.querySelectorAll('.slider');
console.log(slider);
const profile = document.querySelectorAll('.profile');

sliderLeft.addEventListener('click', change);
sliderRight.addEventListener('click', change);

//Write change function
function change() {
  
    for (var i = 0; i < slider.length; i++) {
        // Change profile text using button
        if (slider[i].classList.contains('hide')) {
            slider[i].classList.remove('hide');
            slider[i].classList.add('show');
            
           console.log('hide'); 
        } else {
            slider[i].classList.remove('show');
            slider[i].classList.add('hide');
        }

    //  change profile picture using button
        if (profile[i].classList.contains('hide')) {
            profile[i].classList.remove('hide');
            profile[i].classList.add('show');
        } else {
            profile[i].classList.remove('show');
            profile[i].classList.add('hide');
        }
    }
}