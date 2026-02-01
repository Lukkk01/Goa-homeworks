const images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
]; 
let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
  sliderImage.src = images[index];
}

// Prev
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
