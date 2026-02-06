'use strict';
/**
 * Add your functions here...
 */



function targetTextToConsole(event){
    const button = document.querySelector('#button0')
    console.log(button.textContent)
}

function tttcAttacher(){
    const button = document.querySelector('#button0')
    button.addEventListener('click', targetTextToConsole)
}