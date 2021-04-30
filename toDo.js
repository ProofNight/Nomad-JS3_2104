const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('.js-toDoInput');
const toDoList = document.querySelector('.js-toDoList');

let valueList = [];

function deleteItem(event){
    const clickedBtn = event.target;
    const clickedLi = clickedBtn.parentNode;
    const clickedSpan = clickedLi.querySelector('span');

    // remove on window
    toDoList.removeChild(clickedLi);

    //remove fake Database
    const cleanValueList = valueList.filter(function(a){
        //console.log(`${a.id} : ${clickedLi.id}`);
        return a.id !== parseInt(clickedLi.id);
    })
    valueList = cleanValueList;
    localStorage.setItem('toDoList',JSON.stringify(valueList));
}

function paintItem(){

}

function appendItem(event){
    event.preventDefault();

    const inputItem = toDoInput.value;
    toDoInput.value='';

    const liItem = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click',deleteItem);
    const liSpan = document.createElement('span');

    liSpan.innerText=inputItem;
    delBtn.innerText='❌';
    liItem.appendChild(delBtn);
    liItem.appendChild(liSpan);
    toDoList.appendChild(liItem);

    const itemId = valueList.length + 1;
    liItem.id = itemId;
    const itemObj = {
        id:itemId,
        value:inputItem
    }
    valueList.push(itemObj);
    localStorage.setItem('toDoList',JSON.stringify(valueList));
}

function downLocalStor(obj){
    const liItem = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click',deleteItem);
    const liSpan = document.createElement('span');

    liSpan.innerText=obj.value;
    delBtn.innerText='❌';
    liItem.appendChild(delBtn);
    liItem.appendChild(liSpan);
    liItem.id = obj.id;
    toDoList.appendChild(liItem);
}

function init(){
    const curLocalStor = localStorage.getItem('toDoList');
    if(curLocalStor !== null){
        valueList = JSON.parse(curLocalStor);
        for(n in valueList){
            downLocalStor(valueList[n]);
        }
    }
    toDoForm.addEventListener('submit',appendItem);
}

init();