var slides = document.getElementsByTagName("a");
window.onload = function(){
  showSlides();
  setInterval(showSlides, 1000);
}
    
var slideIndex = 0;
function showSlides() {
    let img = new Image();
    img.src = slides[slideIndex];
    document.getElementById('img-show').src = img.src;
    document.getElementById('caption').innerHTML = slides[slideIndex].children[1].textContent;
    slideIndex++;
    if (slideIndex > slides.length-1) {slideIndex = 0}
  }