// Referencia a la tabla de contenido
const contentTable = document.getElementById("contentTable");
// Referencia al template
const templateRow = document.getElementById("contentRow").content;

const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const createUserForm = document.getElementById("createUserForm");

/**
 * Agregar Row.
 *
 * @param {*} name
 * @param {*} age
 */
function addRow(name, age, id) {
  // Clono el template en una nueva variable
  const row = templateRow.cloneNode(true);

  // Modifico el valor del nodo de texto por el ingesado por el usuario
  row.querySelector(".txtName").innerText = name;
  row.querySelector(".txtAge").innerText = age;
  row.querySelector(".btnDelete").onclick = () => deleteUser(id);
  row.querySelector(".row").dataset.id = id;

  // Inserto en el contenido de la tabla
  contentTable.appendChild(row);
}

/**
 * Llamado a la API.
 *
 * @param {'get'|'post'|'delete'|'put'} method
 * @param {'/users'|'/users/:id'} endpoint
 * @returns
 */
async function api(method, endpoint, body = undefined) {
  if (body) {
    body = JSON.stringify(body);
  }

  const response = await fetch(`/api${endpoint}`, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

/**
 * Cargar datos de la tabla.
 */
async function loadTable() {
  contentTable.innerHTML = "";
  const data = await api("get", "/users");
  data.forEach(({ name, age, id }) => addRow(name, age, id));
}

/**
 * Inicio de la APP.
 */
async function initApp() {
  await loadTable();
}

// function initApp() {
//   fetch('/api/users', {
//     method: 'GET',
//   }).then((response) => {
//     response.json().then((data) => {
//       data.forEach(({ name, age }) => addRow(name, age));
//     });
//   });
// }

/**
 * Crear usuario.
 */
async function createUser() {
  const name = inputName.value;
  const age = inputAge.value;

  await api("post", "/users", {
    name,
    age,
  });

  createUserForm.reset();
  loadTable();
}

async function deleteUser(id) {
  await api("delete", `/users/${id}`);

  const userRow = document.querySelector(`[data-id='${id}']`);
  userRow.remove();
}