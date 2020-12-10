export default class App {
    factorial(numero){
        let fact=1;
        for(let i = numero; i>=1;i--){
            fact = fact * i;
        }
        return(fact);
    }

    convertirAString(numero){
        let string="";
        while(numero >=1){
            string = string + "*";
            numero--;
        }
        return(string);
    }
}

let app = new App();
// Prueba metodo factorial
console.log("Factorial de 5 = "+app.factorial(5));
console.log("Factorial de 6 = "+app.factorial(6));

// Prueba metodo convertirAString
console.log("5 asteriscos: "+app.convertirAString(5));
console.log("8 asteriscos: "+app.convertirAString(8));