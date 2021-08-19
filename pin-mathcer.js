  
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    let leftaction = document.getElementById('left-action');
    let remaining = parseInt(leftaction.innerText)
    leftaction.innerText = remaining - 1;
    let currentrmain = remaining

    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    const calInput = document.getElementById('typed-numbers');
    if (pin == typedNumbers) {
      calInput.value   =  successMessage.innerText;
        failError.style.display = 'none';
    }
    if (currentrmain == 1)
    {
        document.getElementById('submit-btn').style.visibility = 'hidden'
        document.getElementById('message').innerText = latterid.innerText
    }
    else {
        successMessage.style.display = 'none';
        calInput.value   =  failError.innerText;
    }
}









//  document.querySelector('#pin-generate').addEventListener('click', function randompins(){
//         let pin = Math.round(Math.random()*10000);
    
//         const randmpin = document.getElementById('pin-display'); 
//         randmpin.value = pin

//     })


// const buttons = document.getElementsByClassName('button');
// for(let but of buttons)
// {
//     but.addEventListener('click', function numbers(){
//        const userdisplay = document.getElementById('person-input')

//        userdisplay.value += parseInt(but.innerText)     
//     })
// }

// document.getElementById('submit-button').addEventListener('click', function(){
//     const userdisplay = document.getElementById('person-input')
//     const randmpin = document.getElementById('pin-display'); 

//     if(randmpin.value  == userdisplay.value)
//     {
//         alert ('done')
//         randmpin.value = ''
//         userdisplay.value =''
//     }
//     else(
//         alert('try again')
//     )
// })