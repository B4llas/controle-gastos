import { salvar, carregar } from "./storage.js";
import { renderizar } from "./ui.js";
import { filtrarPorMes, resumoMensal } from "./utils.js";
import { atualizarGraficos } from "./charts.js";

let gastos = carregar();
let filtro = null;

const lista = document.getElementById("lista");
const resumo = document.getElementById("resumo");

function atualizar() {
  const dados = filtro ? filtrarPorMes(gastos, filtro) : gastos;

  const { total, porCategoria } = resumoMensal(dados);

  resumo.innerText = `Total: R$ ${total}`;

  renderizar(lista, dados, remover, editar);
  atualizarGraficos(porCategoria);
}

window.adicionar = function () {
  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;
  const data = document.getElementById("data").value;

  gastos.push({ descricao, valor, categoria, data });

  salvar(gastos);
  atualizar();
};

function remover(i) {
  gastos.splice(i, 1);
  salvar(gastos);
  atualizar();
}

function editar(i) {
  const g = gastos[i];

  document.getElementById("descricao").value = g.descricao;
  document.getElementById("valor").value = g.valor;
  document.getElementById("categoria").value = g.categoria;

  remover(i);
}

window.filtrarMes = function () {
  filtro = document.getElementById("mesFiltro").value;
  atualizar();
};

window.resetFiltro = function () {
  filtro = null;
  atualizar();
};

atualizar();