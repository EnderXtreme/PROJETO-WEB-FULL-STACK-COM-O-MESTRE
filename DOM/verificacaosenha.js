botao = document.querySelector("#btn")
botao.onclick = function(){
    texto1 =document.querySelector("h1")
    texto1.innerText=document.form1.login.value
    texto2=document.querySelector("h3")
    if (document.form1.senha.value=="123"){

        texto2.innerText="Seja Bem Vindo ao sistema"
    }
    else{
        texto2.innerText="Verifique Sua senha"
    }

}