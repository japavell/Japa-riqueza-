
let transacoes = [];

function adicionarTransacao() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    if (!descricao || isNaN(valor)) return;

    transacoes.push({ descricao, valor, tipo });
    atualizarLista();
    limparCampos();
}

function atualizarLista() {
    const lista = document.getElementById('lista');
    const totalSpan = document.getElementById('total');
    lista.innerHTML = '';
    let total = 0;

    transacoes.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.tipo === 'entrada' ? '+' : '-'} R$${t.valor.toFixed(2)} - ${t.descricao}`;
        lista.appendChild(li);
        total += t.tipo === 'entrada' ? t.valor : -t.valor;
    });

    totalSpan.textContent = total.toFixed(2);
}

function limparCampos() {
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('tipo').value = 'entrada';
}
