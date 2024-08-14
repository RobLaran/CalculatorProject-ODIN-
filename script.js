let textArea = document.getElementById('textArea');
let buttons = document.querySelectorAll('button');
let clear = document.getElementById('clear');

let result = 0;
let opt = "";


console.log("buttons length: " + buttons.length);

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener('click', () => {

        if (/[0-9.]/g.test(buttons[i].value) && textArea.value.length < 15) {
            textArea.value += buttons[i].value;
        }
        
        if (buttons[i].value == "c") {
            textArea.value = "";
            opt = "";
            result = 0;
        } 
        if (buttons[i].value == "=") {

            switch (opt) {
                case "+":
                    if (textArea.value != "") {
                        result += Number.parseFloat(textArea.value);
                        textArea.value = result.toString();
                    } else {
                        textArea.value = result.toString();
                    }
                    break;
                case "-":
                    if (textArea.value != "") {
                        result -= Number.parseFloat(textArea.value);
                        textArea.value = result.toString();
                    } else {
                        result = result.toFixed(4);
                    }
                    break;
                case "*":
                    if (textArea.value != "") {
                        result *= Number.parseFloat(textArea.value);
                        textArea.value = result.toString();
                    } else {
                        textArea.value = result.toString();
                    }
                    break;
                case "/":
                    if (textArea.value != "") {
                        result /= Number.parseFloat(textArea.value);
                        textArea.value = result.toString();
                        if (result == "Infinity")  textArea.value = "Error";
                    } else {
                        textArea.value = result.toString();
                    }
                    break;
            
                default:
                    break;
            }

            

            opt = "";
            result = 0;
        }

        switch (buttons[i].value) {
            case "+":
                if (textArea.value == "") {
                    result += Number.parseFloat(textArea.value);
                } else {
                    operator(opt);
                }
                textArea.value = "";
                opt = "+";
                break;
            case "-":
                if (textArea.value == "") {
                    result -= Number.parseFloat(textArea.value);
                } else {
                    operator(opt);
                }
                textArea.value = "";
                opt = "-";
                break;
            case "*":
                if (textArea.value == "") {
                    result *= Number.parseFloat(textArea.value);
                } else {
                    operator(opt);
                }
                textArea.value = "";
                opt = "*";
                break;
            case "/":
                if (textArea.value == "") {
                    result /= Number.parseFloat(textArea.value);
                } else {
                    operator(opt);
                }
                textArea.value = "";
                opt = "/";
                break;
        
            default:
                break;
        }
    });

}

function operator(opt) {
    switch (opt) {
        case "+":
            result += Number.parseFloat(textArea.value);
            break;
        case "-":
            result -= Number.parseFloat(textArea.value);
            break;
        case "*":
            result *= Number.parseFloat(textArea.value);
            break;
        case "/":
            result /= Number.parseFloat(textArea.value);
            break;
    
        default:
            result = Number.parseFloat(textArea.value);
            break;
    } 
}
