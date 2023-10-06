const addTodo = document.querySelector(".addTodo");
const todoInput = document.querySelector(".todoInput");
const date = new Date();
const todoContainer = [];
let todoID = 1;
let inputEditing


const saveDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
const displayTodoList = () => {
  let todoTemp = "";
  todoContainer.forEach((todo, index) => {
    todoTemp += `<tr data-id ="${todo.taskID}">
                <td class="editInput${index}">${todo.taskName}</td>
                <td class="editTd${index}"><button class="btn btn-info btn-sm" onclick="editTask(${index})">Edit</button></td>
                <td><button class="btn btn-danger btn-sm " onclick="deletTodo(${index})">Delete</button></td>
                <td><span>${date.getDate()} Aug ,${date.getFullYear()}</span></td>
            </tr>`;
  });
  document.getElementById("showTodo").innerHTML = todoTemp;
};
const createTodoTask = () => {
  let todoTaskInfo = {
    taskID: todoID,
    taskName: todoInput.value,
  };
  todoContainer.push(todoTaskInfo);
  todoID++;
  console.log(todoContainer);
  saveDataToLocalStorage("todoListStorage", JSON.stringify(todoContainer));
  displayTodoList();
  //   Swal.fire("Good job!", `Task Name: ${todoTaskInfo.taskName}`, "success");
  clearInputs();
  console.log(todoContainer);
};
addTodo.addEventListener("click", createTodoTask);

const getDataFromStorage = () => {
  if (localStorage.getItem("todoListStorage")) {
    todoContainer.push(...JSON.parse(localStorage.getItem("todoListStorage")));
    displayTodoList();
  }
};
getDataFromStorage();

function clearInputs() {
  todoInput.value = "";
}
function deletTodo(index) {
  console.log("Delete", index);
  todoContainer.splice(index, 1);
  displayTodoList();
  saveDataToLocalStorage("todoListStorage", JSON.stringify(todoContainer));
  console.log(todoContainer);

}


// -------------------
function saveEdit(index){
  inputEditing = document.querySelector(`.editInput${index} input`)
  todoContainer[index].taskName=inputEditing.value
  saveDataToLocalStorage("todoListStorage", JSON.stringify(todoContainer));
  displayTodoList();
}
function cancelEdit(){
  displayTodoList();
}
function editTask(index){
  inputEditing = document.querySelector(`.editInput${index}`)
  console.log(inputEditing);
  const rowEditing = document.querySelector(`.editTd${index}`)
  console.log(rowEditing);

  inputEditing.innerHTML = '<input type="text" class="form-control ms-5">';
  rowEditing.innerHTML = `<button class="btn btn-info btn-sm" onclick="saveEdit(${index})">Save</button> <button class="btn btn-danger btn-sm" onclick="cancelEdit()">Cancel</button>`;
}
