const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide');
  conent.scrollLeft += 1100;
  event.preventDefault();
})

leftbtn.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide');
  conent.scrollLeft -= 1100;
  event.preventDefault();
})

const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");

rightbtn1.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide-1');
  conent.scrollLeft += 1100;
  event.preventDefault();
})

leftbtn1.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide-1');
  conent.scrollLeft -= 1100;
  event.preventDefault();
})


const leftbtn3 = document.querySelector(".btn-1f");
const rightbtn4 = document.querySelector(".btn-1o");

rightbtn4.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide-3');
  conent.scrollLeft += 1100;
  event.preventDefault();
})

leftbtn3.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide-3');
  conent.scrollLeft -= 1100;
  event.preventDefault();
})



const leftbtn5 = document.querySelector(".btn-1e");
const rightbtn6 = document.querySelector(".btn-1t");

rightbtn6.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide-5');
  conent.scrollLeft += 1100;
  event.preventDefault();
})

leftbtn5.addEventListener('click', function(event){
  console.log('do0ne');
  const conent = document.querySelector('.product-slide-5');
  conent.scrollLeft -= 1100;
  event.preventDefault();
})


const backtop = document.querySelector('.backtop');

backtop.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"

  });

})

const sidebar = document.querySelector(".sidebar");

const cross = document.querySelector(".fa-times");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");


sidebtn.addEventListener("click",()=>{
sidebar.classList.add("active");
cross.classList.add("active");
black.classList.add("active");



});

cross.addEventListener("click",()=>{
sidebar.classList.remove("active");
cross.classList.remove("active");
black.classList.remove("active");

})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click",() => {
  black.classList.toggle("active-1");
  signin.classList.toggle("active");
  tri.classList.toggle("active");
}) 