const div = document.querySelector('div');
const section = document.querySelector('section');
const button = document.querySelector('button');

// თუ addEventListener-ის მესამე პარამეტრი ცარიელია ან არის false მაშინ იწყება bubbling თუ მესამე პარამეტრი არის true მაშინ capturing
// capturing -- იწყება მშობლიდან მთავრდება შვილი ელემენტით
// bubbling -- იწყება შვილი ელემენტით მთავრდება მშობლით

// --- capturing ---
div.addEventListener('click', function() {console.log('div capturing')}, true);
section.addEventListener('click', function() {console.log('section capturing')}, true);
button.addEventListener('click', function() {console.log('button capturing')}, true);


// --- bubbling ---
div.addEventListener('click', function() {console.log('DIV bubbling')}, false);
section.addEventListener('click', function() {console.log('SECTION bubbling')}, false);
button.addEventListener('click', function() {console.log('BUTTON bubbling')}, false);