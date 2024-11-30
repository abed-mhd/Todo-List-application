const ListsContainer=document.querySelector('[data-lists-container]');
const ListForm=document.querySelector('[data-new-list-form]');
const ListInput=document.querySelector('[data-new-list-input]');
const ListTasksContainer=document.getElementById('list-tasks');
const HeaderTitle=document.querySelector('[data-header-title]');
const HeaderTasksRemaining=document.querySelector('[data-header-tasks-remaining]');
const TasksContainer=document.querySelector('[data-tasks-container]')
const TaskForm=document.querySelector('[data-new-task-form]');
const TaskInput=document.querySelector('[data-new-task-input]');
const ClearTasksButton=document.querySelector('[data-clear-tasks-button]');
const ClearListButton=document.querySelector('[data-delete-list-button]');
ClearListButton.addEventListener('click',()=>{
    DeleteSelectedList();
})

ClearTasksButton.addEventListener('click',()=>{
    ClearCheckedTasks()
})



const LOCAL_STORAGE_LISTS_KEY='task.lists'
const LOCAL_STORAGE_SELECTED_ID_KEY='list.id'
let lists=JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_KEY))||[];
let selected_id=localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY);
ListForm.addEventListener('submit',e=>{
    e.preventDefault();
    const ListName=ListInput.value;
    if(ListName===null||ListName==='') return;
    const List= CreateList(ListName);
    lists.push(List);
    ListInput.value=null;
    render();
    Save();
})

TaskForm.addEventListener('submit',e=>{
    e.preventDefault();
    const TaskName=TaskInput.value;
    if(TaskName===null||TaskName==='') return;
    const Task=CreateTask(TaskName);
    TaskInput.value=null;
    const selectedlist=lists.find(list=>list.id===selected_id);
    selectedlist.tasks.push(Task)
    render();
    Save();
})
ListsContainer.addEventListener('click',e=>{
    if(e.target.tagName.toLowerCase()==='li'){
        selected_id=e.target.dataset.id;
        render();
        Save();
    }
})

TasksContainer.addEventListener('click',e=>{
    if(e.target.tagName.toLowerCase()==='div'){
        const selectedlist=lists.find(list=>list.id===selected_id);
        const selectedtask=selectedlist.tasks.find(task=>task.id===
            e.target.querySelector('input').id);
        selectedtask.completed=selectedtask.completed?false:true;
        render();
        Save();
    }
})


function render(){
    ClearElement(ListsContainer);
    if(lists==[]) return;
    lists.forEach(list=>{
        const list_element=document.createElement('li');
        list_element.classList.add('list');
        list_element.dataset.id=list.id;
        if(list_element.dataset.id===selected_id){
            ClearElement(TasksContainer)
            list_element.classList.add('selected');
            ListTasksContainer.style.display='block';
            for(var i=0;i<list.tasks.length;i++){
                const Task=document.createElement('div');
                Task.classList.add('task');
                const checkbox=document.createElement('input');
                checkbox.type='checkbox';
                checkbox.id=list.tasks[i].id.toString();
                checkbox.checked=list.tasks[i].completed;
                checkbox.classList.add('checkboxex')
                const Label=document.createElement('label');
                Label.htmlFor=list.tasks[i].id.toString();
                Label.innerText=list.tasks[i].name;
                Task.append(checkbox,Label);
                TasksContainer.append(Task);
            }
            HeaderTitle.innerText=list.name;
            const CompletedTasksCount=CompletedTasks();
            HeaderTasksRemaining.innerText=(list.tasks.length-CompletedTasksCount).toString()+" Tasks Remaining";
        }
        list_element.innerText=list.name;
        ListsContainer.append(list_element);
    })
}

function ClearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}



function CreateList(name){
    return {id:Date.now().toString(),name:name,tasks:[]};
}


function CreateTask(name){
    return { name:name,id:Date.now().toString(),completed:false};
}

function Save(){
    localStorage.setItem(LOCAL_STORAGE_LISTS_KEY,JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY,selected_id);
}

function DeleteSelectedList(){
    for( var i = 0; i < lists.length; i++){ 
    
        if ( lists[i].id === selected_id) {
            lists.splice(i, 1); 
        }

    }
    selected_id=null;
    ListTasksContainer.style.display='none';
    render();
    Save();
}

function CompletedTasks(){
    let count=0;
    const CheckBoxex=document.querySelectorAll('.checkboxex');
    if(CheckBoxex===null){
        return 0;
    }
    else{
        CheckBoxex.forEach(checkbox=>{
            if(checkbox.checked===true) count++;
        })
        return count;
    }
}


function ClearCheckedTasks(){
    const CheckBoxex=document.querySelectorAll('.checkboxex');
    if(CheckBoxex===null) return;
    CheckBoxex.forEach(checkbox=>{
        if(checkbox.checked===true){
            lists.forEach(list=>{
                if(list.id===selected_id){
                    for( var i = 0; i < list.tasks.length; i++){ 
    
                        if ( list.tasks[i].id === checkbox.id) {
                            list.tasks.splice(i, 1); 
                        }
                
                    }
                }
            })
        }
    })
    render();
    Save();
}
render();