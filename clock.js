const clock = document.querySelector('.js-clock');

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerText = `${hour<10?`0${hour}`:hour}:${minute<10?`0${minute}`:minute}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();