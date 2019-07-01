loadEvents();
//load every event in the page

function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click',deleteOrTick);
}

// deleteTick
function deleteOrTick(e){
    if(e.target.className == 'delete')
      deleteTask(e);
    else {
      tickTask(e);
    }
  }
  
  // tick a task
  function tickTask(e){
    const task = e.target.nextSibling;
    if(e.target.checked){
      task.style.textDecoration = "line-through";
      task.style.color = "#ff0000";
    }else {
      task.style.textDecoration = "none";
      task.style.color = "#2f4f4f";
    }
  }

function clearList(e){
    //setting the ul innerhtml to an empty string
    let ul = document.querySelector('ul').innerHTML = '';
}

//submit data structure
function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
        addTask(input.value);
    }
    input.value = '';
}

//add tasks
function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector(';.taskBoard').getElementsByClassName.display = 'block';
}

