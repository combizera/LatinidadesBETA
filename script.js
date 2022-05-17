const ativar = document.querySelector(".sec1__cta");

function handleClick(event) {
  console.log(`Clicou em: ${ativar}.`);
}

ativar.addEventListener("click", handleClick);
console.log(ativar);
