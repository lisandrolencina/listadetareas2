let contadorDeTareas = 0;
const input = document.querySelector('input[type = "text"]');

userInput.addEventListener('submit', (e)=>{


    e.preventDefault();
    addTask();

});

let addTask = ()=>{
    contadorDeTareas++

    let newValue = input.value;

    list.innerHTML += `<div class="task-container" id="${contadorDeTareas}"> 
    <label > <input type="checkbox"> ${newValue}
    </label> 
<img src="/borrar.png" class="closeBtn">
</div>`

input.value = '';

updateStats();

};

list.addEventListener('click',(e)=>{
    if(e.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if  (e.srcElement.nodeName == 'IMG'){

        delateTask(e.srcElement.parentNode.id);
    }
        

});


let updateStats = () =>{

    let elemento = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');


stats.innerHTML = 

`    
<p>Tareas pendientes: ${elemento.length} completadas: ${checkbox.length} </p>
`
};

let delateTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();

};