console.log("Estou aqui!");

const date = document.querySelector('#input-date');
const client = document.querySelector('#input-client');
const equipament = document.querySelector('#input-equipament');
const amount = document.querySelector('#input-amount');
const team = document.querySelector('#input-team');
const driver = document.querySelector('#input-driver');
const observation = document.querySelector('#input-observation');
const state = document.querySelector('#input-state');

const btn = document.querySelector('.btn');
btn.addEventListener("click", (e) => {
    if(!date && !client && !equipament && !amount && !team && !driver && !observation && !state) return;

    createTableList(date, client, equipament, amount, team, driver, observation, state);

})



const table = document.querySelector('.tbody');

function createTableBodyTr(){
    const tr = document.createElement('tr');
    return tr;
}

function createTableBodyTd(){
    const td = document.createElement('td');
    return td;
}

function createTableList(date, client, equipament, amount, team, driver, observation, state){
    const tr = createTableBodyTr();
    const td1 = createTableBodyTd();
    const td2 = createTableBodyTd();
    const td3 = createTableBodyTd();
    const td4 = createTableBodyTd();
    const td5 = createTableBodyTd();
    const td6 = createTableBodyTd();
    const td7 = createTableBodyTd();
    const td8 = createTableBodyTd();

    td1.innerHTML = date.value;
    td2.innerHTML = client.value;
    td3.innerHTML = equipament.value;
    td4.innerHTML = amount.value;
    td5.innerHTML = team.value;
    td6.innerHTML = driver.value;
    td7.innerHTML = observation.value;
    td8.innerHTML = state.value;

    table.appendChild(tr);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    saveTable();
    
}

function removeList(){
    
}


function saveTable(){
    const list = table.querySelectorAll('tr');
   // localStorage.setItem("dados", list);
    console.log(list);

}
