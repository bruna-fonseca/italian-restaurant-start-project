var modal = document.getElementById("myModal");

var btn = document.getElementById("showForm");
var span = document.getElementsByClassName("close")[0];
var reservForm = document.getElementById("reservForm");
var spanMessage = document.getElementById("message");
var btnCancel = document.getElementById("cancel");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


reservForm.addEventListener("submit", event => {
  event.preventDefault();
  let hasPermision=true;
  
  [...reservForm.elements].forEach((field, index) => {

    if (field.value == "" && field.name!="button") {
      hasPermision=false;
      message = "Por favor verifique se todos os dados foram preenchidos";
     // break;
    }
  });
  if(hasPermision){
    spanMessage.textContent ="Sua Reserva foi salva, estamos te aguardando no Restaurante Start!";
  }else{
    spanMessage.textContent ="Por favor verifique se todos os dados foram preenchidos";
  }
});

btnCancel.addEventListener("click", event => {
  event.preventDefault();
  [...reservForm.elements].forEach((field, index) => {
    field.value="";
  });
  spanMessage.textContent="Sua reserva foi cancelada!";
});

function clearMessage(){
  spanMessage.textContent="";
}