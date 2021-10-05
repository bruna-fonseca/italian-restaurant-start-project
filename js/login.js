 
  function validarLogin() {

  var loginUser = document.getElementById('login');
  var senhaUser = document.getElementById('senha');
  var dataNasc = document.getElementById('nasc');
  var caixaerro = document.getElementById('msgFinal')
  
  if(loginUser.value == "" || senhaUser.value == ""){
    caixaerro.innerHTML = "Verifique se os campos estão preenchidos corretamente.";  
    return false
  }else{
    alert("Seja bem vidx ao restaurante start")
  }

}


