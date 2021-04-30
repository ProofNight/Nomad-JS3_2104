const nameForm = document.querySelector('.js-nameForm'),
    nameInput = nameForm.querySelector('.js-nameInput');
const greeting = document.querySelector('.js-greeting');

function paintGreet(userName){
    const date = new Date();
    const hours = date.getHours();
    /*
    const greeting = document.createElement('h4');
    nameForm.appendChild(greeting);
    greeting.id = 'greeting js-greeting'
    */
    
    if(5<hours && hours<12){
        greeting.innerText=`Good morning, ${userName}!`
    }else if(11<hours && hours <20){
        greeting.innerText=`Good afternoon, ${userName}!`
    }else{
        greeting.innerText=`Good Night, ${userName}!`
    }
    greeting.classList.add('bottomLine');
    nameForm.classList.remove('visible');
    greeting.classList.add('visible');
}

function getName(event){
    event.preventDefault();
    localStorage.setItem('name',nameInput.value);
    paintGreet(nameInput.value);
}

function init(){
    const getStorage = localStorage.getItem('name');

    if(getStorage){
        paintGreet(getStorage);
    }else{
        nameForm.addEventListener('submit',getName);
    }
}

init();