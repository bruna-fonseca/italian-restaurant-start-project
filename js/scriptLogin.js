
//Modal de Erro

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function showModal() {
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

//MODAL DE SUCESSO

let modal2 = document.getElementById("myModalSucesso");
let btn2 = document.getElementById("myBtn2");
let span2 = document.getElementsByClassName("close2")[0];

function showModalSuccess() {
    modal2.style.display = "block"
}

span2.onclick = function () {
    modal2.style.display = "none";
    window.location.href='#'
}

window.onclick = function (event2) {
    if (event2.target == modal2) {
        modal.style.display = "none"
    }
}


function validarLogin() {
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value


    if (login == "" || senha == "") {
     
        showModal()
        return false;
    } else {
        showModalSuccess()
        return false;
    }
}

function fechar() {
    let msg = document.getElementById('mensagem')
    let msgSuccess = document.getElementById('msgSuccess')

    msg.style.display = "none"
    msgSuccess.style.display = "none"
}


function signout() {
    let esqueceuSenha = document.getElementById('msg2')
    esqueceuSenha.style.display = "block";
    esqueceuSenha.innerHTML = " Para recuperar a senha procure entrar em contato com o restaurante.";
}


