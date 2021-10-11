const burguerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');

burguerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function showModal(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', () =>{
        menu = menu.getAttribute('href');
        if(menu === '#' || menu === ''){
            showModal();
        }  
});

var menu01 = document.getElementsByClassName('menu')[1];

menu01.addEventListener('click', () =>{
        menu01 = menu01.getAttribute('href');
        if(menu01 === '#' || menu01 === ''){
            showModal();
        }    
});

var menu02 = document.getElementsByClassName('menu')[2];

menu02.addEventListener('click', () =>{
        menu02 = menu02.getAttribute('href');
        if(menu02 === '#' || menu02 === ''){
            showModal();
        }     
});

var menu03 = document.getElementsByClassName('menu')[3];

menu03.addEventListener('click', () =>{
        menu03 = menu03.getAttribute('href');
        if(menu03 === '#' || menu03 === ''){
            showModal();
        }
        
});

var menu04 = document.getElementsByClassName('menu')[4];

menu04.addEventListener('click', () =>{
        menu04 = menu04.getAttribute('href');
        if(menu04 === '#' || menu04 === ''){
            showModal();
        }
        
});

var menu05 = document.getElementsByClassName('menu')[5];

menu05.addEventListener('click', () => {
        menu05 = menu05.getAttribute('href');
        if(menu05 === '#' || menu05 === ''){
          let msgErro = document.getElementsByClassName('erro')[0];
            showModal();
}    

});