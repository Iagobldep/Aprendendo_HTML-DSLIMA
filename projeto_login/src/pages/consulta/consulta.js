const loginSalvo = localStorage.getItem('usuario');
const senhaSalva = localStorage.getItem('senha');
document.querySelector("#rLogin").textContent = loginSalvo;
document.querySelector("#rSenha").textContent = senhaSalva;

/*
const formulario = document.querySelector('#formConsulta');
const resposta = document.querySelector('#resp');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.querySelector('#txtLogin').value;
    const senha = document.querySelector('#txtSenha').value;

    if (login === localStorage.getItem('usuario') && senha === localStorage.getItem('senha')) {
        resposta.textContent = "Usuário e senha válidos";
    }
    else {
        resposta.textContent = "Usuário ou senha inválidos";
    }
})
*/