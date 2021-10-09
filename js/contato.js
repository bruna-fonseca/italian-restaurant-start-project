
//função geral de validação de contato:
//para saber se todos os campos estaá preenchidos conforte a validação.

function enviarMenssagem() {

    var nomeCompleto = document.getElementById('nome_completo').value
    var email = document.getElementById('email').value
    var telefone = document.getElementById('telefone').value
    var assunto = document.getElementById('assunto').value
    var menssagem = document.getElementById('menssagem').value

    //se estiver OKAY:

    if (nomeCompleto && email && telefone && assunto && menssagem) {

// OBS: if para validar as princípais caracteristica do telefone
        if(telefone.length != 11){
        
            document.getElementById("menssagem_final").innerHTML = "<font color='red'>Número de telefone precisa ter 11 digitos. </font>";
           //return para encerrar essa etapa
            return
        }

        // OBS: if para validar as princípais caracteristica de um email
        if (email.includes('@') && email.includes(".")) {

            //Aqui busco colocar o "msg" do acontecimento no HTML para aparecer pro usuário, nesse caso é a validação do email.
            document.getElementById("menssagem_final").innerHTML = "<font color='green'>Menssagem enviada </font>";

        } else {

            //Aqui busco colocar o "msg" do acontecimento no HTML para aparecer pro usuário, nesse caso é o erro do email.      
            document.getElementById("menssagem_final").innerHTML = "<font color='red'>E-mail ivalido </font>";
        }

        //Se não estiver OKAY:
    } else {

        //Aqui busco colocar o "msg" do acontecimento no HTML para aparecer pro usuário, neste caso o erro.
        document.getElementById("menssagem_final").innerHTML = "<font color='red'>Preencha os campos </font>";
    }


}





