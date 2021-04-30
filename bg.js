const body = document.querySelector('body');
const IMG_NUM = 3;

function paintBg(num){
    console.log('paint');
    const image = new Image();
    const date = new Date();
    const hours = date.getHours();
    //const hours = 14;

    if(5<hours && hours<12){
        image.src = `images/mor${randomNum(IMG_NUM)+1}.jpg`
    }else if(11<hours && hours <20){
        image.src = `images/aft${randomNum(IMG_NUM)+1}.jpg`
    }else{
        image.src = `images/nig${randomNum(IMG_NUM)+1}.jpg`
    }
    
    image.classList.add('bgImage');
    body.appendChild(image);
}

function randomNum(num){
    const number = Math.floor(Math.random()*num);
    return number;
}

function init(){
    paintBg(1);
}

init();