let pizza, barra, linha;

export function atualizarGraficos(dados) {
  const labels = Object.keys(dados);
  const values = Object.values(dados);

  if (pizza) pizza.destroy();
  if (barra) barra.destroy();
  if (linha) linha.destroy();

  pizza = new Chart(document.getElementById("graficoPizza"), {
    type: "pie",
    data: {
      labels,
      datasets: [{ data: values }]
    }
  });

  barra = new Chart(document.getElementById("graficoBarra"), {
    type: "bar",
    data: {
      labels,
      datasets: [{ data: values }]
    }
  });

  linha = new Chart(document.getElementById("graficoLinha"), {
    type: "line",
    data: {
      labels,
      datasets: [{ data: values }]
    }
  });
}