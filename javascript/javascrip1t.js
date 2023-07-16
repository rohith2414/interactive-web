const btn = document.getElementById('change-Color');

btn.addEventListener('click', function onClick() {
  if(btn.style.backgroundColor === 'salmon')
  {
    btn.style.backgroundColor='hsl(214, 19%, 24%)';
    btn.style.color = 'grey';
  }
  else{
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
  }
});
const btn1 = document.getElementById('change-Color-1');

btn1.addEventListener('click', function onClick() {
  if(btn1.style.backgroundColor === 'salmon')
  {
    btn1.style.backgroundColor='hsl(214, 19%, 24%)';
    btn1.style.color = 'grey';
  }
  else{
  btn1.style.backgroundColor = 'salmon';
  btn1.style.color = 'white';
  }
});
const btn2 = document.getElementById('change-Color-2');

btn2.addEventListener('click', function onClick() {
  if(btn2.style.backgroundColor === 'salmon')
  {
    btn2.style.backgroundColor='hsl(214, 19%, 24%)';
    btn2.style.color = 'grey';
  }
  else{
  btn2.style.backgroundColor = 'salmon';
  btn2.style.color = 'white';
  }
});
const btn3= document.getElementById('change-Color-3');

btn3.addEventListener('click', function onClick() {
  if(btn3.style.backgroundColor === 'salmon')
  {
    btn3.style.backgroundColor='hsl(214, 19%, 24%)';
    btn3.style.color = 'grey';
  }
  else
  {
  btn3.style.backgroundColor = 'salmon';
  btn3.style.color = 'white';
  }
});
const btn4 = document.getElementById('change-Color-4');

btn4.addEventListener('click', function onClick() {
  if(btn4.style.backgroundColor === 'salmon')
  {
    btn4.style.backgroundColor='hsl(214, 19%, 24%)';
    btn4.style.color = 'grey';
  }
  else
  {
  btn4.style.backgroundColor = 'salmon';
  btn4.style.color = 'white';
  }
});

const thanksContainer=document.getElementById("thanks-container")
const mainContainer=document.getElementById("main-container-first");


const submitButton=document.getElementById("submit-btn")

submitButton.addEventListener("click", () =>
{
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display="none"
});

const rating=document.getElementById("rating");

const rates=document.querySelector(".r");

function ratingNo(value)
{
  rating.innerHTML=value;
}