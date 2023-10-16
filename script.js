const operations = ["+","-","x","/"];

const typeCalc = (id) => {
    let inputNumber =  document.getElementById("inputNumber");
    let contOp = 0;
    let operation; 
    
    switch(id.value){
        case "C":
            inputNumber.value= "";
            break;

        case "<":
            inputNumber.value = inputNumber.value.substring(0, inputNumber.value.length-1);
            break;
        
        case "+/-": 
            if(!isNaN(parseFloat(inputNumber.value)))
                inputNumber.value = parseFloat(inputNumber.value) * (-1);
            break;
        
        // case "+":
        // case "-":
        // case "x":
        // case "/":
        // case ".":
        //     if(!isNaN(parseFloat(inputNumber.value)))
        //         inputNumber.value += id.value; 
        // break;

        default:
            inputNumber.value += id.value;

            for(let i=0; i < inputNumber.value.length;i++){
                for(op of operations){
                    if(inputNumber.value[i] == op)
                    contOp++;
                }
            }
              
            if((contOp == 2 && inputNumber.value.indexOf("-") != 0) || contOp > 2){
                operation = inputNumber.value.substring(inputNumber.value.length-1, inputNumber.value.length);
               
                if(isNaN(parseFloat(operation))){
                    inputNumber.value =  inputNumber.value.substring(0, inputNumber.value.length-1);
                    calculate(inputNumber);
                    inputNumber.value += operation;
                    console.log("a")
            
                }else{
                    inputNumber.value =  inputNumber.value.substring(0, inputNumber.value.length-1);
                }
            }
    }
}

const calculate = (numbers) => {
    let number1, number2;
    let index;
    let operation;
    let result;

    for(let i=0; i < inputNumber.value.length;i++){
        for(op of operations){
            if(numbers.value[i] == op){
                operation =  numbers.value[i];
                index =  i;
            }
        }
    }
    number1 = parseFloat(numbers.value.substring(0,index));
    number2 = parseFloat(numbers.value.substring(index+1, numbers.value.length));

    switch(operation){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case 'x':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = "Error"
    }

    numbers.value = result;
}