console.log("Estou aqui!");

const inputDate = document.getElementById("input-date");
const inputClient = document.getElementById("input-client");
const inputServiceOrder = document.getElementById("input-service-order");
const inputEquipament = document.getElementById("input-equipament");
const inputTeam = document.getElementById("input-team");
const inputDriver = document.getElementById("input-driver");
const inputObservation = document.getElementById("input-observation");
const inputState = document.getElementById("input-state");
const ul = document.querySelector(".ul-list-exit");
const ule = document.querySelector(".ul-list");
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

const createLi = () => {
  const li = document.createElement("li");
  li.setAttribute("id", "li-list");
  return li;
};

const create = (value1) => {
  const li = createLi();
  li.innerText = value1;
  ul.appendChild(li);
  te(li);
  save();
  clear();
};

const te = (v) => {
  const text = v.innerHTML;
  const li = createLi();
  li.innerText = text;
  ule.appendChild(li);
  save();
}

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
  create(arrays.join(" | "));
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

const clear = () => {
  inputDate.focus();
  inputDate.value = "";
  inputClient.value = "";
  inputServiceOrder.value = "";
  inputEquipament.value = "";
  inputTeam.value = "";
  inputDriver.value = "";
  inputObservation.value = "";
  inputState.value = "";
};

function reload() {
  const list = localStorage.getItem("FROTA");
  listArray = JSON.parse(list);

  for (let dataArray of listArray) {
    create(dataArray);
  }
}

reload();

// função para apaga o dado e pega-lo para outra lista