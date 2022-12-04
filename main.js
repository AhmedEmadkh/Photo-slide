var sliderImage = Array.from(document.querySelectorAll('.slider-container img'));
var slidesCount = sliderImage.length;
var currentSlide = 4;
let slideNumberElement = document.getElementById('slide-number');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
// creating the ul
var paginationElement = document.createElement('ul');
//adding id for the ul
paginationElement.setAttribute('id','pagination-ul');

for(i=1;i<=slidesCount;i++){
  //creating list items
  var paginationItems = document.createElement('li');
  // adding attribute for the list
  paginationItems.setAttribute('data-index',i);
  paginationItems.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItems);
}


document.getElementById('indicators').appendChild(paginationElement);

var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

var clickNext= ()=>{
  if(nextButton.classList.contains('disabled')){
    return false;
  }else{
    console.log("Next");
    currentSlide++;
    checker();
  }
}
var clickPrev= ()=>{
  if(prevButton.classList.contains('disabled')){
    return false;
  }else{
    console.log("Previous");
    currentSlide--;
    checker();
  }
}

nextButton.addEventListener('click',clickNext)
prevButton.addEventListener('click',clickPrev)


function checker(){
  slideNumberElement.textContent =`Slide# ${currentSlide} of ${slidesCount}`;
  removeActiveClass();
  sliderImage[currentSlide-1].classList.add('active');
  paginationElement.children[currentSlide-1].classList.add("active");


  if(currentSlide==1){
    prevButton.classList.add('disabled');
  }else{
    prevButton.classList.remove('disabled');
  }
  if(currentSlide==slidesCount){
    nextButton.classList.add('disabled');
  }else{
    nextButton.classList.remove('disabled');
  }
}

function removeActiveClass(){
  sliderImage.forEach((img)=>{
    img.classList.remove('active');
  });
  paginationBullets.forEach((bullets)=>{
    bullets.classList.remove('active');
  })
}
