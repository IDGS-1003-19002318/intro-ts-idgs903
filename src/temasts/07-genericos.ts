class PilaEnteros {
    private vec: number[] = [];
    insertar(x: number) {
        this.vec.push(x);
    }
    extraer() {
        this.vec.length > 0 ? this.vec.pop() : null;
    }
}

class PilaStrings {
    private vec: string[] = [];
    insertar(x: string) {
        this.vec.push(x);
    }
    extraer() {
        this.vec.length > 0 ? this.vec.pop() : null;
    }
}

let pila1 = new PilaEnteros();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());
//cadena
let pila2 = new PilaStrings();
pila2.insertar('23');
pila2.insertar('28');
pila2.insertar('2');
console.log(pila2.extraer());


//Clase generica
class PilaGenerica<T> {
    private vec: T[] = [];
    insertar(x: T) {
        this.vec.push(x);
    }
    extraer() {
        this.vec.length > 0 ? this.vec.pop() : null;
    }
}

let pila3 = new PilaGenerica<number>(); //pila de numeros
pila3.insertar(23);
pila3.insertar(28);
pila3.insertar(2);
console.log(pila3.extraer());
//cadena
let pila4 = new PilaGenerica<string>(); //pila de cadenas
pila4.insertar('23');
pila4.insertar('28');
pila4.insertar('2');
console.log(pila4.extraer());