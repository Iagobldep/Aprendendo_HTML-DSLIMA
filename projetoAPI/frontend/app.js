const form = document.querySelector('#formProduto');
const produto = document.querySelector('#txtProduto');
const mensagem = document.querySelector('#mensagem');
const listarProdutos = document.querySelector('#listarProdutos');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nomeProduto = produto.value;
    mensagem.textContent = 'Enviando para o servidor...';
    mensagem.className = 'carregando'
    try {
        const resposta = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({produto:nomeProduto})
        });
        const dados = await resposta.json();
        if (resposta.ok){
            mensagem.textContent = dados.mensagem;
            mensagem.className = 'sucesso';

            const li = document.createElement('li');
            li.textContent = `Código do produto ID: ${dados.id_inserido} - ${nomeProduto}`;
            listarProdutos.appendChild(li);
            produto.value = '';
        } else {
            mensagem.textContent = `Erro: ${dados.erro}`;
            mensagem.className = 'erro'
        }
    } catch (error) {
        console.error("Erro na requisição: ", error);
        mensagem.textContent='Falaha ao Conectar com o servidor'
        mensagem.
    }
})