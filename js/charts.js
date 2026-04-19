function atualizarGraficos(categorias, meses) {
  const ctx = document.getElementById("grafico").getContext("2d");

  if (grafico) grafico.destroy();

  grafico = new Chart(ctx, {
    type: tipoGrafico,
    data: {
      labels: Object.keys(categorias),
      datasets: [{
        label: "Gastos",
        data: Object.values(categorias)
      }]
    }
  });
}