function adicionarGasto() {
  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;
  const data = document.getElementById("data").value;

  if (!descricao || !valor || !data) return;

  gastos.push({ descricao, valor, categoria, data });

  salvarDados();
  renderizar();
}

function remover(i) {
  gastos.splice(i, 1);
  salvarDados();
  renderizar();
}

function editar(i) {
  const g = gastos[i];

  document.getElementById("descricao").value = g.descricao;
  document.getElementById("valor").value = g.valor;
  document.getElementById("categoria").value = g.categoria;
  document.getElementById("data").value = g.data;

  remover(i);
}

function trocarGrafico(tipo) {
  tipoGrafico = tipo;
  renderizar();
}

function filtrarPeriodo() {
  const inicio = document.getElementById("mesInicio").value;
  const fim = document.getElementById("mesFim").value;

  const filtrado = gastos.filter(g => {
    const mes = g.data.slice(0, 7);
    return (!inicio || mes >= inicio) && (!fim || mes <= fim);
  });

  renderizar(filtrado);
}

renderizar();