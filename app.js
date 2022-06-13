let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  e.preventDefault();
  // get the input values
  //   console.log(e.target.parentElement);
  let form = e.target.parentElement;
  //   console.log(form.children);
  let todoText = form.children[0].value;
  //   console.log(todoText);

  if (todoText === "") {
    alert("please input the text.");
    return;
  }

  //   create todo
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;
  todo.appendChild(text);

  //   cerat
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.addEventListener("click", (e) => {
    // console.log(e.target.parentElement);
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  });

  //   remove
  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.addEventListener("click", (e) => {
    // console.log(e.target);
    let todoItem = e.target.parentElement;
    // console.log(todoItem);
    todoItem.addEventListener("animationend", () => {
      // remove localstorage
      let text = todoItem.children[0].innerText;
      let myListArray = JSON.parse(localStorage.getItem("list"));
      myListArray.forEach((item, index) => {
        if (item.todoText == text) {
          myListArray.splice(index, 1);
          localStorage.setItem("list", JSON.stringify(myListArray));
        }
      });
      todoItem.remove();
    });
    todoItem.style.animation = "scaleDown .3s forwards";
  });

  //   edit
  let editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editButton.addEventListener("click", function () {
    let innertext = this.parentElement.children[0];
    let edittext = prompt("edit", innertext.textContent);
    innertext.textContent = edittext;
    let myListArray = JSON.parse(localStorage.getItem("list"));

  });

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);
  todo.appendChild(editButton);

  todo.style.animation = "scaleUp .3s forwards";

  //   create an object
  let myTodo = {
    todoText: todoText
  };

  //   localstorge
  let myList = localStorage.getItem("list");
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }
  console.log(JSON.parse(localStorage.getItem("list")));

  //   clear input
  form.children[0].value = "";
  section.appendChild(todo);
});

let myList = localStorage.getItem("list");
if (myList !== null) {
  let myListArray = JSON.parse(myList);
  myListArray.forEach((item) => {
    // creat a todo
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = item.todoText;
    todo.appendChild(text);

    //   cerat
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.addEventListener("click", (e) => {
      // console.log(e.target.parentElement);
      let todoItem = e.target.parentElement;
      todoItem.classList.toggle("done");
    });

    //   remove
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.addEventListener("click", (e) => {
      // console.log(e.target);
      let todoItem = e.target.parentElement;
      // console.log(todoItem);
      todoItem.addEventListener("animationend", () => {
        // remove localstorage
        let text = todoItem.children[0].innerText;
        let myListArray = JSON.parse(localStorage.getItem("list"));
        myListArray.forEach((item, index) => {
          if (item.todoText == text) {
            myListArray.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(myListArray));
          }
        });
        todoItem.remove();
      });
      todoItem.style.animation = "scaleDown .3s forwards";
    });

    //   edit
    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.addEventListener("click", function (e) {
      let innertext = this.parentElement.children[0];
      let edittext = prompt("edit", innertext.textContent);
      innertext.textContent = edittext;
      let
    });

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);
    todo.appendChild(editButton);

    section.appendChild(todo);
  });
}