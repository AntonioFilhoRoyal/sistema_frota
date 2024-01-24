console.log("Estou aqui!");

const inputClient = document.getElementById('input-client');
const inputServiceOrder = document.getElementById('input-service-order');
const inputEquipament = document.getElementById('input-equipament');
const inputTeam = document.getElementById('input-team');
const inputDriver = document.getElementById('input-driver');
const inputObservation = document.getElementById('input-observation');
const inputState = document.getElementById('input-state');
//const inputEquipament = document.getElementById('input-equipament');

const btn = document.querySelector('.btn')
.addEventListener('click', e => {
  if(!inputClient.value && !inputServiceOrder.value && !inputEquipament.value 
    && !inputTeam.value && !inputDriver.value, !inputObservation.value && !inputState.value) return;
  arrayData(inputClient.value, inputServiceOrder.value, inputEquipament.value, inputTeam.value, inputDriver.value, inputObservation.value, inputState.value);
});

const ul = document.querySelector('ul');

const createLi = () =>{
  const li = document.createElement('li');
  return li;
}

const arrayData = (value0, value1, value2, value3, value4, value5, value6) =>{
  const arrays = [];
  arrays.push(value0, value1, value2, value3, value4, value5, value6);
  create(arrays);
}

const create = (value1) =>{
  const li = createLi();
  li.innerText = `${value1[0]} - ${value1[1]} - ${value1[2]} - ${value1[3]} - ${value1[4]} - ${value1[5]} - ${value1[6]}`;
  ul.appendChild(li);
  save(value1);
  clear();
}

const save = (arrays) =>{
  localStorage.setItem('frota', arrays);
}

const recharge = () =>{
  const list = localStorage.getItem('frota');
  create(list);
}

const clear = () =>{
  inputClient.focus();
  inputClient.value = "";
  inputServiceOrder.value = "";
  inputEquipament.value = "";
  inputTeam.value = "";
  inputDriver.value = "";
  inputObservation.value = "";
  inputState.value = "";

}

recharge();