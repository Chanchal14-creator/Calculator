// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenvalue='';
// for (item of buttons) {

//     item.addEventListener('onclick', (e) => {
//         buttonText = e.target.innerText;
//         console.log(" button is ", buttonText);
//         if (buttonText == "AC") {
//             screenValue = '';
//             screen.innerHTML = screenValue;
//         }
//         else if (buttonText == "÷"
//         ) {
//             buttonText = '/';
//             screenValue += buttonText;
//             screen.innerHTML = screenValue;

//         }
//         else if (buttonText == "=") {
//             screenValue+="\n";
//             screen.innerHTML = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.innerHTML= screenValue;

//         }



//     })
// }
function append(val) {
    document.getElementById('screen').innerHTML += val;
}
function del() {
    document.getElementById('screen').innerHTML--;
}
function cleardisplay() {
    document.getElementById('screen').innerHTML = '';
}
function equal() {
    expression = document.getElementById('screen').innerHTML;
    expression = eval(expression);
    document.getElementById('screen').innerHTML = expression;
}