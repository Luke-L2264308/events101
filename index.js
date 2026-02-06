'use strict';
/**
 * Add your functions here...
 */



function targetTextToConsole(event){
    const button = document.querySelector('#button0');
    console.log(button.textContent);
}

function tttcAttacher(){
    const button = document.querySelector('#button0');
    button.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher(){
    const paraElement = document.querySelector('#thisisalovelyparagraph');
    paraElement.addEventListener('click', lovelyToggle);

}

function lovelyButtonAttacher(){
    const button = document.querySelector('#button1');
    button.addEventListener('click',lovelyToggle);
}
