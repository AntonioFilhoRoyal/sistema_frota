console.log("Estou aqui!");

const ul = document.querySelector('#ul');

const date = document.querySelector("#input-date");
const client = document.querySelector("#input-client");
const equipament = document.querySelector("#input-equipament");
const amount = document.querySelector("#input-amount");
const team = document.querySelector("#input-team");
const driver = document.querySelector("#input-driver");
const observation = document.querySelector("#input-observation");
const state = document.querySelector("#input-state");

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  if ( !date && !client && !equipament && !amount && !team && !driver && !observation && !state )return;
    createTableList(date.value, client.value, equipament.value, amount.value, team.value, driver.value, observation.value, state.value);
});

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createParagraphy(){
    const p = document.createElement('p');
    return p;
}


function createTableList( date, client, equipament, amount, team, driver, observation, state) {
    const li = createLi();
    const p1 = createParagraphy();
    const p2 = createParagraphy();
    const p3 = createParagraphy();
    const p4 = createParagraphy();
    const p5 = createParagraphy();
    const p6 = createParagraphy();
    const p7 = createParagraphy();
    const p8 = createParagraphy();
    
    p1.innerText = date;
    p2.innerText = client;
    p3.innerText = equipament;
    p4.innerText = amount;
    p5.innerText = team;
    p6.innerText = driver;
    p7.innerText = observation;
    p8.innerText = state;

    ul.appendChild(li);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(p4);
    li.appendChild(p5);
    li.appendChild(p6);
    li.appendChild(p7);
    li.appendChild(p8);

    savee();
}
