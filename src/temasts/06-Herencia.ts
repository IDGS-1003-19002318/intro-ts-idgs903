// Herencia
class Persona5 {
    constructor(public nombre: string, public edad: number) {
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    };
}

class Empleado extends Persona5 {
    constructor(nombre: string, edad: number, private sueldo: number) {
        super(nombre, edad);
    }
    imprimir() {
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

