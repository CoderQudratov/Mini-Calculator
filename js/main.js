let input = document.querySelector('input')
let numbers =document.querySelectorAll('.calculator__nums')
function handleCalc(event) {
    input.value+=event.target.textContent
   
}
numbers.forEach(number =>{
    number.addEventListener('click',handleCalc)
})
function handleClick(event) {
 
    if (event.target.classList.contains('equal-to')) {
        input.value=eval(input.value)
    }
    if (event.target.classList.contains('clear')) {
        input.value=null
    }
}
window.addEventListener('click',handleClick)