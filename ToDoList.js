const inputText = document.getElementById("text");
const addButton = document.getElementById("add-button");
const todosContainer = document.querySelector(".todos-container");

addButton.addEventListener("click",()=>{
    if(inputText.value.trim().length =="")
       alert("Please Enter Any Task");
    // return;
    
    const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item-container');
        // todoItemContainer.innerHTML = ("todo-item-container");
        //document.write(todoItemContainer);
        //console.log(todoItemContainer);
         todosContainer.appendChild(todoItemContainer)
        // id = todo-text;
         const todoText = document.createElement('p');
        todoText.id ='todo-text';
        todoText.innerText = inputText.value;
        todoItemContainer.appendChild(todoText);

    // Create BUTTON EDIT and DELETE.    
    const editButton = document.createElement("button");
    editButton.id = "edit-btn";
    const editImage = document.createElement("img");
    editImage.src = "./Image/edit.png";
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);

    editButton.addEventListener('click',()=>{
        inputText.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    const deleteButton = document.createElement("button");
    deleteButton.id = "delete-btn" ;
    const deleteImage = document.createElement("img");
    deleteImage.src = "./Image/delete.png";
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click',()=>{
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });
    inputText.value = "";
});