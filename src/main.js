export default class App {
    factorial(numero){
        let fact=1;
        for(let i = numero; i>=1;i--){
            fact = fact * i;
        }
        return(fact);
    }

}

let app = new App();
// Prueba metodo factorial
console.log("Factorial de 5 = "+app.factorial(5));
console.log("Factorial de 6 = "+app.factorial(6));

