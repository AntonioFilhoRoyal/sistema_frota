console.log("Estou aqui!");

const inputDate = document.getElementById("input-date");
const inputClient = document.getElementById("input-client");
const inputServiceOrder = document.getElementById("input-service-order");
const inputEquipament = document.getElementById("input-equipament");
const inputTeam = document.getElementById("input-team");
const inputDriver = document.getElementById("input-driver");
const inputObservation = document.getElementById("input-observation");
const inputState = document.getElementById("input-state");
//const inputEquipament = document.getElementById('input-equipament');

const btn = document.querySelector(".btn").addEventListener("click", (e) => {
  if (
    (!inputDate.value &&
      !inputClient.value &&
      !inputServiceOrder.value &&
      !inputEquipament.value &&
      !inputTeam.value &&
      !inputDriver.value,
    !inputObservation.value && !inputState.value)
  )
    return;
  arrayData(
    inputDate.value,
    inputClient.value,
    inputServiceOrder.value,
    inputEquipament.value,
    inputTeam.value,
    inputDriver.value,
    inputObservation.value,
    inputState.value
  );
});

const ul = document.querySelector("ul");

const createLi = () => {
  const li = document.createElement("li");
  return li;
};

const arrayData = (
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7
) => {
  const arrays = [];
  arrays.push(value0, value1, value2, value3, value4, value5, value6, value7);
  create(arrays);
};

const create = (value1) => {
  const li = createLi();
  li.innerText = value1;
  ul.appendChild(li);
  save();
  clear();
};

const save = () => {
  const listData = ul.querySelectorAll("li");
  const arraysData = [];
  for (arraysDt of listData) {
    let dataArray = arraysDt.innerText;
    arraysData.push(dataArray);
  }

  const arrayJSON = JSON.stringify(arraysData);
  localStorage.setItem("FROTA", arrayJSON);
};

function reload() {
  const list = localStorage.getItem("FROTA");
  listArray = JSON.parse(list);

  for (let dataArray of listArray) {
    create(dataArray);
  }
}

const clear = () => {
  inputClient.focus();
  inputDate.value = "";
  inputClient.value = "";
  inputServiceOrder.value = "";
  inputEquipament.value = "";
  inputTeam.value = "";
  inputDriver.value = "";
  inputObservation.value = "";
  inputState.value = "";
};

reload();
