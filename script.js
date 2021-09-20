let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue='';
for (item of buttons) {
   
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(" button is ", buttonText);
        if (buttonText == "AC") {
            screenValue = '';
            screen.innerHTML = screenValue;
        }
        else if (buttonText == "÷"
        ) {
            buttonText = '/';
            screenValue += buttonText;
            screen.innerHTML = screenValue;

        }
        else if (buttonText == "=") {
            screenValue+="\n";
            screen.innerHTML = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.innerHTML= screenValue;
            
        }
        


    })
}
