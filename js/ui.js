function renderizar(lista = gastos) {
  const ul = document.getElementById("lista");
  const totalEl = document.getElementById("total");

  ul.innerHTML = "";

  let total = 0;
  let porCategoria = {};
  let porMes = {};

  lista.forEach((g, i) => {
    total += g.valor;

    porCategoria[g.categoria] = (porCategoria[g.categoria] || 0) + g.valor;

    const mes = g.data?.slice(0, 7);
    porMes[mes] = (porMes[mes] || 0) + g.valor;

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${g.descricao} | ${g.categoria} | R$ ${g.valor} | ${g.data}</span>
      <div>
        <button onclick="editar(${i})">Editar</button>
        <button onclick="remover(${i})">X</button>
      </div>
    `;

    ul.appendChild(li);
  });

  totalEl.innerText = "Total: R$ " + total;

  atualizarGraficos(porCategoria, porMes);
}