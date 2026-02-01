const page = window;
const clickBtn = document.getElementById("clickBtn");
const nameInput = document.getElementById("nameInput");
const hoverBox = document.getElementById("hoverBox");
const pressBtn = document.getElementById("pressBtn");
const focusInput = document.getElementById("focusInput");

// onload - გაეშვება როცა გვერდი ჩაიტვირთება
page.addEventListener('load', function() {
    console.log('loaded');
})

// onunload - გაეშვება როდესაც გვერდს დავხურავთ ან გავალთ
page.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    console.log('page is unloading')
})

// onclick - გაეშვება როდესაც მითითებულ ელემენტს დავაკლიკებთ
clickBtn,addEventListener('click', function() {
    console.log('you clicked the button');
})

// onchange - გაეშვება როდესაც input-ის მნიშვნელობა შეიცვლება
nameInput.addEventListener('change', function() {
    console.log('input value changed');
})

// onmouseover - როგორც hover CSS-ში ანუ როდესაც ელემენტზე არის კურსორი მაგრამ არ აჭერს
hoverBox.addEventListener('mouseover', function() {
    this.textContent = 'mouse is over element';
})

// onmouseout - როდესაც კურსორი ტოვებს ელემენტს
hoverBox.addEventListener('mouseout', function() {
    this.textContent = 'hover me'
})

// onmousedown - როდესაც კურსორი აწვება ელემენტს
pressBtn.addEventListener('mousedown', function() {
    this.textContent = 'pressed'
})

// onmouseup - როდესაც კურსორი ელემენტს აუშვებს (დაჭერიდან)
pressBtn.addEventListener('mouseup', function() {
    this.textContent = 'press me'
})

// onfocus - როდესაც input ფოკუსშია, მაგალითად როდესაც მასში ვწერთ
focusInput.addEventListener('focus', function() {
    console.log('input in focus')
})

// onblur - როდესაც input ფოკუსს კარგავს მაგალითად როდესაც სხვა inputზე გადავიტანთ კურსორს
focusInput.addEventListener('blur', function() {
    console.log('input lost focus')
})