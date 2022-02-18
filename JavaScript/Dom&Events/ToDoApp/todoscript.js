//UI vars
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

let items;

// call event listeners
eventlisteners();
loadItems();

function eventlisteners() {
    //submit event
    form.addEventListener("submit", addNewItem);
    taskList.addEventListener("click", deleteItem);
    btnDeleteAll.addEventListener("click", deleteAllItem);
}

function loadItems() {
    item = getItemFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

function getItemFromLS() {
    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }

    return items;
}

function setItemToLS(text) {
    items = getItemFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}

function deleteItemFromLS(text) {
    items = getItemFromLS();

    items.forEach(function (item, intex) {
        if (item === text) items.splice(intex, 1);
    });
    localStorage.setItem("items", JSON.stringify(items));
}

function createItem(text) {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li t0 ul
    taskList.appendChild(li);
}

function addNewItem(e) {
    if (input.value === "") alert("add new item");

    createItem(input.value);
    setItemToLS(input.value);

    //clear input
    input.value = "";

    e.preventDefault();
}

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        if (confirm("are you sure?")) {
            e.target.parentElement.parentElement.remove();

            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

function deleteAllItem(e) {
    if (confirm("are you sure?")) {
        //taskList.innerHTML='';

        while (taskList.firstElementChild)
            taskList.removeChild(taskList.firstChild);

        localStorage.clear();
    }

    e.preventDefault();
}
