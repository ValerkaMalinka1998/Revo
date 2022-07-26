let btnT_1 = document.querySelector('.btnToggle_1');
let btnT_2 = document.querySelector('.btnToggle_2');
let btnT_3 = document.querySelector('.btnToggle_3');
let prices = document.querySelector('.giftset__price');

let nameCoffee = document.querySelector('.giftset__coffe__name');
let descrCoffe = document.querySelector('.gifset__coffe__descr');
let toggleImage = document.querySelector('.gefset__toogle__img');

btnT_1.onclick = function() {
  btnT_1.classList.add('active');
  btnT_2.classList.remove('active');
  btnT_3.classList.remove('active');
    if (btnT_1.classList.contains('active'))
  {  
    prices.textContent = prices.dataset.price;
    descrCoffe.textContent = descrCoffe.dataset.descr;
    nameCoffee.textContent = nameCoffee.dataset.name;
    toggleImage.setAttribute('src', toggleImage.dataset.image);
  }
}
btnT_2.onclick = function() {
  btnT_2.classList.add('active');
  btnT_1.classList.remove('active');
  btnT_3.classList.remove('active');
  
  if (btnT_2.classList.contains('active'))
  {  
  prices.textContent = "100.000";
  nameCoffee.textContent ="Revo Origin";
  descrCoffe.textContent= "lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam a pariatur id aliquid provident voluptatum, distinctio nostrum necessitatibus et. Quia, quaerat totam blanditiis nemo in sapiente delectus nam natus official";
  toggleImage.setAttribute('src', '/img/Revo-origin.png');
  }
}
btnT_3.onclick = function() {
  btnT_3.classList.add('active');
  btnT_1.classList.remove('active');
  btnT_2.classList.remove('active');
 
    
  if (btnT_3.classList.contains('active'))
  {  
  prices.textContent = "150.000";
  nameCoffee.textContent ="Revo Morning";
  descrCoffe.textContent= "lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam a pariatur id aliquid provident voluptatum, distinctio nostrum necessitatibus et. Quia, quaerat totam blanditiis nemo in sapiente delectus nam natus official";
   toggleImage.setAttribute('src', '/img/Revo-morning.png');
}
}

