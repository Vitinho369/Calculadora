const operations = ["+","-","x","/"];
let habilateOp = true;

const typeCalc = (id) => {
    let inputNumber =  document.getElementById("inputNumber");

    switch(id.value){
        case "C":
            inputNumber.value= "";
            habilateOp = true;
            break;

        case "<":
            inputNumber.value = inputNumber.value.substring(0, inputNumber.value.length-1);
            habilateOp = true;
            break;
        
        case "+/-": 

            if(!isNaN(parseFloat(inputNumber.value))){
                if((contSinal(inputNumber) == 1 && inputNumber.value[0] == "-") || contSinal(inputNumber) == 0){
                    inputNumber.value = parseFloat(inputNumber.value) * (-1); 
                }else if((inputNumber.value.includes("+") || inputNumber.value.includes("-") || 
                inputNumber.value.includes("*") || inputNumber.value.includes("/"))){
                    calculate(inputNumber);
                    inputNumber.value = parseFloat(inputNumber.value) * (-1);
                }
                    
                habilateOp = true;
            }
                  
            break;
        
        case "+":
        case "-":
        case "x":
        case "/":
        case ".":
            if(!isNaN(parseFloat(inputNumber.value)) && habilateOp){
                if((id.value == "." && inputNumber.value[inputNumber.value.length-1] != ".") || id.value != "."){
                    inputNumber.value += id.value; 
                    separateNumbers(inputNumber);
                }
                habilateOp = false;
            }

        break;

        default:
             inputNumber.value += id.value;
             separateNumbers(inputNumber);
             habilateOp = true;
    }
}

const contSinal = (numbers) =>{
    let contSinal = 0;
    for(let i=0; i < numbers.value.length;i++){
        for(op of operations){
            if(numbers.value[i] == op)
            contSinal++;
        }
    }

   return contSinal;
}

const separateNumbers = (inputNumber) =>{
   
    let operation; 
    if((contSinal(inputNumber) == 2 && inputNumber.value.indexOf("-") != 0) || contSinal(inputNumber) > 2){
        operation = inputNumber.value.substring(inputNumber.value.length-1, inputNumber.value.length);
       
        if(isNaN(parseFloat(operation))){
            inputNumber.value =  inputNumber.value.substring(0, inputNumber.value.length-1);
            calculate(inputNumber);
            inputNumber.value += operation;
    
        }else{
            inputNumber.value =  inputNumber.value.substring(0, inputNumber.value.length-1);
        }
    }
}

const calculate = (numbers) => {
    let number1, number2;
    let index;
    let operation;
    let result;

    for(let i=0; i < numbers.value.length;i++){
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
    
    if(result == "Error" && !isNaN(number1))
        result = number1;

    if(!Number.isInteger(result))
        result = result.toPrecision(3);
    
    numbers.value = result;
}