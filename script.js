const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  alert("Adicionado com Sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("Setup@habits", JSON.stringify(nlwSetup.data))
}

/*
const data = {
  run: ["01-01", "01-02", "01-06"],
  water: ["01-04", "01-05"],
  biceps: ["01-01", "01-03"],
  sleep: ["01-01", "01-03", "01-05", "01-6"],
  food: ["01-01", "01-03"],
}
*/

const data = JSON.parse(localStorage.getItem("Setup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
