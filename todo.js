

const todoList = [
  {
    name:'go to gym',
    date:'25.09.2023'
  },
  {
    name:'wash dishes',
    date:'25.09.2023'
  }
];


updateList();
deleteAll();


function updateList(){
  let todolistHTML ='';

  todoList.forEach((task, index) => {

    const html = `
    
    <div>•<input class="checkbox checkbox-js" type="checkbox">${task.name}
    </div>
    <div>${task.date}</div>
    <button class="delete-button delete-button-js">DELETE</button>
    `
    todolistHTML += html;

    
  })
  console.log(todolistHTML);
  document.querySelector('.todolist-grid-js').innerHTML = todolistHTML;

  document.querySelectorAll('.delete-button-js').forEach(
    (deleteButton, index) => {
      deleteButton.addEventListener('click',()=> {
        todoList.splice(index, 1);
        updateList();
      })
    }
  )
    
  countTask();

}


document.querySelector('.js-add-task-button')
  .addEventListener('click',() => {
    addList();
  })

  
function addList() {
  const inputElement = document.querySelector('.task-input')
    const name = inputElement.value;

    const dateElement = document.querySelector('.task-date-input')
      const date = dateElement.value;

      todoList.push(
        {
          name,
          date
        }
      );

      inputElement.value="";
      updateList();
    
}



function countTask() {
  let completedTask = 0;

  document.querySelectorAll('.checkbox-js').forEach((box) => {
    box.addEventListener('click', () => {
      if(box.checked) {
        completedTask +=1;
      } else {
        completedTask -=1;
      }

      updateCount(completedTask);

    })
  })

  updateCount(completedTask);

}


function updateCount(completedTask) {
  const unCompleted = todoList.length - completedTask;

  document.querySelector('.todo-count-js').innerHTML = `
    <p>Total: ${todoList.length}</p>
    <p>Completed Task: ${completedTask}</p>
    <p>Uncompleted Task: ${unCompleted}</p>
  `;
}

function deleteAll() {
  document.querySelector('.delete-all').addEventListener('click', () => {
    document.querySelector('.todolist-grid-js').innerHTML = '';
    document.querySelector('.todo-count-js').innerHTML = `
    <p>Total: 0</p>
    <p>Completed Task: 0</p>
    <p>Uncompleted Task: 0</p>
  `;
  })
}

