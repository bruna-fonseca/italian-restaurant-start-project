 
  function validarLogin() {

  var loginUser = document.getElementById('login');
  var senhaUser = document.getElementById('senha');
  var caixaerro = document.getElementById('msgFinal')
  
  if(loginUser.value == "" || senhaUser.value == ""){
    caixaerro.innerHTML = "Verifique se os campos estão preenchidos corretamente.";  
    document.getElementById('login');
    document.getElementById('senha');
    return false;
  }else{
    alert("Seja bem vidx ao restaurante start")
  }

}


