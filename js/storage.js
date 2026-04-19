const KEY = "gastos";

export function salvar(dados) {
  localStorage.setItem(KEY, JSON.stringify(dados));
}

export function carregar() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}