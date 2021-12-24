var btn = document.querySelector('.custombutton');
var s2 = document.querySelector('.s2');
var checkmark_circle = document.querySelector('.checkmark__circle');
var checkmark = document.querySelector('.checkmark');
var checkmark_check = document.querySelector('.checkmark__check');

btn.addEventListener('click', ()=>{
    s2.style.display="block";
    checkmark_circle.classList.add('checkmark__circle__animation');
    checkmark.classList.add('checkmark__animation');
    checkmark_check.classList.add('checkmark__check__animation');
    setTimeout(function() {
        s2.style.display="none";
    }, 2000);
});