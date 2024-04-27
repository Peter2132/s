
        function calculator() {
            let num1 = parseFloat(prompt("enter value:"));
            let num2 = parseFloat(prompt("enter value2:"));
            let operator = prompt("enter operation + - * /");
            

            
            if (operator == '+') {
                result = num1 + num2;
            } else if (operator == '-') {
                result = num1 - num2;
            } else if (operator == '*') {
                result = num1 * num2;
            } else if (operator == '/') {
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    prompt("Error");
                    return;
                }
            } 

            alert("Result: " + result);
        }

        calculator();

 