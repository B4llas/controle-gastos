export function renderizar(lista, gastos, remover, editar) {
  lista.innerHTML = "";

  gastos.forEach((g, i) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${g.descricao} | ${g.categoria} | R$ ${g.valor} | ${g.data}
    `;

    const div = document.createElement("div");

    const b1 = document.createElement("button");
    b1.innerText = "Editar";
    b1.onclick = () => editar(i);

    const b2 = document.createElement("button");
    b2.innerText = "X";
    b2.onclick = () => remover(i);

    div.appendChild(b1);
    div.appendChild(b2);

    li.appendChild(div);
    lista.appendChild(li);
  });
}