let services = []
let cost = []
const buttons = {
  washBtn: document.getElementById("wash-btn"),
  mow: document.getElementById("mow"),
  pull: document.getElementById("pull"),
  send: document.getElementById("send")

}
const total = document.getElementById("total")
const note = document.getElementById("note")
const taskAdded = document.getElementById("task-added")
let totalCost = 0
let servicesDone = ''

buttons.washBtn.addEventListener("click", function () {
  if (buttons.washBtn.clicked) {
    console.log("button already clicked")
  } else {
    services.push("Wash Car:")
    cost.push(10)
    addServices(services, cost)
    buttons.washBtn.clicked = true
    totalCost = 0
  }
})


buttons.mow.addEventListener("click", function () {
  if (buttons.mow.clicked) {
    console.log("button already clicked")
  } else {
    services.push("Mow Lawn:")
    cost.push(20)
    addServices(services, cost)
    buttons.mow.clicked = true
  }
})

buttons.pull.addEventListener("click", function () {
  if (buttons.pull.clicked) {
    console.log("button already clicked")
  } else {
    services.push("Pull weeds:")
    cost.push(30)
    addServices(services, cost)
    buttons.pull.clicked = true
  }
})

buttons.send.addEventListener("click", function () {
  taskAdded.innerHTML = ""
  total.innerHTML = ""
  note.textContent = ""
  buttons.mow.clicked = false
  buttons.pull.clicked = false
  buttons.washBtn.clicked = false
  services = []
  cost = []
  totalCost = 0
  total.textContent = "$0"
})


function addServices(serv, cost) {
  totalCost = 0
  for (let i = 0; i < serv.length; i++) {
    servicesDone = `<div class="frame services">
            <span class="service-done"> ${serv[i]}</span>
            <span class="cash"> <span>$</span> ${cost[i]} </span>
        </div>`
    totalCost += cost[i]
  }
  taskAdded.innerHTML += servicesDone
  total.textContent = ` $ ${totalCost}`
  note.textContent = "We accept cash, credit card, or PayPal"
}
