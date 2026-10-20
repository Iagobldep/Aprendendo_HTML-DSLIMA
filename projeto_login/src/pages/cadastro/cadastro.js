const formulario = document.querySelector('#formCadastro');
const resposta = document.querySelector('#resp');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = document.querySelector('#txtLogin').value;
    const senha = document.querySelector('#txtSenha').value
    localStorage.setItem('usuario', login);
    localStorage.setItem('senha', senha);
    
    resposta.textContent = login;
});