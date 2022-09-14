/*Create Selector*/
const todoInput = document.querySelector(".todo-input");
const todoButton= document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const selectFilter = document.querySelector('#filter');

/*To-do Functions & Make addEventListener*/
todoButton.addEventListener("click",function addTodo(e) {
  e.preventDefault();

/** Create todo div*/
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
  
/* create Li */
const newTodo = document.createElement("li");
newTodo.innerText= todoInput.value; 
newTodo.classList.add("todo-item"); 
todoDiv.appendChild(newTodo); 

/* compelet(checklistsymbol) button & appendChild to todoDiv*/
const completedButton= document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
completedButton.classList.add('complete-btn')
todoDiv.appendChild(completedButton);

/* Trush Button appendChild to todoDiv*/
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class= "fas fa-trash"><i>';
trashButton.classList.add('trash-btn')
todoDiv.appendChild(trashButton);

/* Append to the list*/
  todoList.appendChild(todoDiv);

/* Clean the todoinput box after added on our todolist*/
  todoInput.value = " ";
}
)

/* Delete-item Function & Make addEventListener (Click)*/
  todoList.addEventListener("click", function(e) {
  const item= e.target; 

  /* Delete TODO item */
  if (item.classList[0] === 'trash-btn'){
  const todo= item.parentElement; 

  /* Animation */
  todo.classList.add('fall'); 
  todo.addEventListener('transitionend', function() {
  todo.remove(); 
    })
  }

  /* CheckMark as completed */
  if (item.classList[0] === 'complete-btn'){
  const todo= item.parentElement; 
  todo.classList.toggle('completed')
  }
  })

  /** Filter Function */
  selectFilter.onclick= ()=>{
  const allTodos = document.querySelectorAll('.todo');
  const completedTodo = document.querySelectorAll('.completed')

  /** Filter Completed */
  if(selectFilter.value == "completed"){
    allTodos.forEach((everyTodo)=>{ 
    everyTodo.style.display="none";
    })
    completedTodo.forEach((todo)=>{
    todo.style.display='flex'
    })
  }
  /** Filter Uncompleted */
  if (selectFilter.value == 'uncompleted') {
    allTodos.forEach((everyTodo) => {
    //To show all uncompleted
    everyTodo.style.display = 'flex'
    })
    completedTodo.forEach((todo) => {
    // to hidde all uncompleted
    todo.style.display = 'none';
    })
  }
   /** Show ALll */
  if (selectFilter.value == 'all') {
    allTodos.forEach((everyTodo) => {
    // console.log(everyTodo)
    everyTodo.style.display = 'flex'
    })
    completedTodo.forEach((todo) => {
    todo.style.display = 'flex';
    })
  }

}

