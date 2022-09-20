let preOutput = document.querySelector('.previous-operand');
const currOutput = document.querySelector('.current-operand');
// ****** don't use `id` for multiply elements
const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
// *******
const clear = document.querySelector('.clear');
let calculate = document.querySelector('.calculate');
const del = document.querySelector('.del');
const fullDisly = document.querySelector('.output');


// select all number and operator element in together as a node list
function numberDisplay(numOutput) {
    for (let i = 0; i < numOutput.length; i++) {
        const element = numOutput[i];

        element.addEventListener("click", () => {
            preOutput.innerHTML = preOutput.innerHTML + element.innerHTML;

            // ****** It doesn't need to be returned 
            // return numOutput;
            // *******
        })
    }
}

numberDisplay(number);
numberDisplay(operator);

// calculate all display element 
calculate.addEventListener("click", () => {

    // ********** You are changing the variable/element itself. Not its innerHTML.. It was the main problem
    // preOutput = eval(preOutput.innerHTML);
    // *************


    // ***** It would be the current way. But you usually don't want to show the results in both elements. So calculating only the bottom element
    // preOutput.innerHTML = eval(preOutput.innerHTML);
    // *************

    // show the calculation
    currOutput.innerHTML = eval(preOutput.innerHTML);

})

// display last one element delete event 
del.addEventListener("click", () => {
    preOutput.innerHTML = preOutput.innerHTML.substring(0, preOutput.innerHTML.length - 1);
})

// Display all element clear event 
clear.addEventListener("click", () => {

    // ********* You are removing the elments this way.... Not the innerHTML of that elements
    // fullDisly.innerHTML = '';
    // ********* 

    // removing element's innerHTML
    preOutput.innerHTML = '';
    currOutput.innerHTML = '';

});
