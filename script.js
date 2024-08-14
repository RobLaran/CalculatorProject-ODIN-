let textArea = document.getElementById('textArea');
let buttons = document.querySelectorAll('button');
let clear = document.getElementById('clear');


console.log("buttons length: " + buttons.length);

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', () => {

        if (/[0-9]/g.test(buttons[i].value)) {
            textArea.value += buttons[i].value;
            console.log(buttons[i].value);
        }
        
        if (buttons[i].value == "c") textArea.value = "";
    });

}

function add() {
    
}

