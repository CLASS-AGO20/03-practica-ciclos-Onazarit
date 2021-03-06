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

    obtenerDivisibles(numero){
        let contador=0;
        let i = numero;
        do{
            if(numero % i == 0){
                contador++;
            }
            i--;
        }while(i>=1)
        return(contador);
    }

    elevar(numero, potencia){
        let aux=1;
        for(let i = potencia;i>=1;i--){
            aux = numero*aux;
        }
        return(aux);
    }
}

let app = new App();
// Prueba metodo factorial
console.log("Factorial de 5 = "+app.factorial(5));
console.log("Factorial de 6 = "+app.factorial(6));

// Prueba metodo convertirAString
console.log("5 asteriscos: "+app.convertirAString(5));
console.log("8 asteriscos: "+app.convertirAString(8));

// Prueba metodo obtenerDivisibles
console.log("El 6 es divisible entre "+app.obtenerDivisibles(6)+" numeros");
console.log("El 10 es divisible entre "+app.obtenerDivisibles(10)+" numeros");

// Prueba metodo elevar;
console.log("Numero 3 elevado a la 4 es: "+app.elevar(3,4));
console.log("Numero 8 elevado a la 3 es: "+app.elevar(8,3));