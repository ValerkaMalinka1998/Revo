let commentsField = document.querySelector('.commnets__field');
let commentsForm = document.querySelector('.commnets__form');

let btnSubmit = document.querySelector('.btn__comments');
let commentsText = document.querySelector('.text__comments');
let chatCounter = document.querySelector('.char');

commentsForm.onsubmit = function(evt) {
evt.preventDefault();

let newComments = document.createElement('p');
newComments.classList.add('comments__descr');
newComments.textContent = commentsText.value;
commentsText.value="";
commentsField.appendChild(newComments);
chatCounter.textContent = 0;
};

commentsText.oninput = function() {
  chatCounter.value = commentsText.value.length;

  if( chatCounter.value > 142){
    commentsText.classList.add('warning');
    btnSubmit.disabled = true;
  }
  else {
   commentsText.classList.remove('warning');
    btnSubmit.disabled = false; 
  }
};