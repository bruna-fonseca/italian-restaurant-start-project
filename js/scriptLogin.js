function validarLogin(){
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value
    let msg = document.getElementById('mensagem')
    let msgSuccess = document.getElementById('msgSuccess')

    if(login == ""|| senha == ""){
        msg.innerHTML="Por favor, verifique novamente."
        return false;
    }else{
        msgSuccess.innerHTML = "Seja bem vindo"
    }
}
function signout(){
    let esqueceuSenha = document.getElementById('msg2')   
    esqueceuSenha.innerHTML = " Para recuperar a senha procure entrar em contato com o restaurante. ";
}
