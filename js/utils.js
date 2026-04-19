export function filtrarPorMes(gastos, mes) {
  if (!mes) return gastos;

  return gastos.filter(g =>
    g.data?.startsWith(mes)
  );
}

export function resumoMensal(gastos) {
  let total = 0;

  const porCategoria = {};

  gastos.forEach(g => {
    total += g.valor;

    if (!porCategoria[g.categoria]) {
      porCategoria[g.categoria] = 0;
    }

    porCategoria[g.categoria] += g.valor;
  });

  return { total, porCategoria };
}