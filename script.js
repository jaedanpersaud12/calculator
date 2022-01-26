// Create a simple calculator using an HTML form. The form should have two text inputs to enter the two operands and a radio button to select the operator. 
// Four types of operations should be possible (add, subtract, multiply and divide). The calculator should include an HTML element to provide the result of 
// the operation. There should be submit button that would trigger a calculate function. Use this code example of how to trigger JavaScript from a form. Use 
// a loop to access each of the operands as part of a NodeList. Use conditions in your JavaScript to check that the operands are both positive numbers and 
// provide an appropriate message otherwise in the result. Finally, use a switch statement to carry out the appropriate operation based on the ‘value’ of the 
// radio button

const submit = document.querySelector('#form')
const firstOperand = document.querySelector('#first-operand')
const secondOperand = document.querySelector('#second-operand')
const output = document.querySelector('#output')
const lastCalc = document.querySelector('#last-calc')

submit.addEventListener('submit', e => {
    e.preventDefault()
        //prevents the default action of submitting the form
    const operator = document.querySelector('input[name="operator"]:checked')
    let one = parseInt(firstOperand.value)
    let two = parseInt(secondOperand.value)
        //creates two variables to hold the value of both operands
    if (one < 0 || two < 0) {
        //checks if either operand inputs are negative
        firstOperand.value = ''
        secondOperand.value = ''
            //resets the inputs
        alert("Please enter positive numbers")
            //alerts the user to enter positive numbers
    } else if (!one || !two) {
        //checks if either operand inputs are empty
        firstOperand.value = ''
        secondOperand.value = ''
            //resets the inputs
        alert("Please don't leave the inputs blank")
            //alerts the user to enter some numbers
    } else {
        switch (operator.value) {
            //switch to check what operator the user chose and does the calculation and sets the output as the calculation result
            case "+":

                output.textContent = one + two
                lastCalc.textContent = `${one} + ${two}`
                break;
            case "-":
                output.textContent = one - two
                lastCalc.textContent = `${one} - ${two}`
                break;
            case "/":
                output.textContent = one / two
                lastCalc.textContent = `${one} / ${two}`
                break;
            case "*":
                output.textContent = one * two
                lastCalc.textContent = `${one} * ${two}`
                break;
        }
        firstOperand.value = ''
        secondOperand.value = ''
            //resets the inputs
    }
})