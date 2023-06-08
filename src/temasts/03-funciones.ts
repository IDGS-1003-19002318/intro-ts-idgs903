function suma(): void {
    console.log(2 + 2);
};

// function suma2(a, b): void {
function suma2(a: number, b: number): number {
    console.info(a + b);
    return a + b;
}

console.log(suma2(23, 4));

function multiplicar(n1: number, _otronumero?: number, nuevonumero: number = 2): number {
    return n1 * nuevonumero;
}

console.log(multiplicar(2, 3, 4));

const sumar3 = (a: number, b: number): string => {
    return `${a + b}`;
}

interface Mascota {
    nombre: string;
    edad: number;
    mostrarEdad: () => void;
}

function calcular(mascota: Mascota, x: number): void {
    mascota.edad += x;
    console.log(mascota);
}

const nuevaMascota: Mascota = {
    nombre: 'Juan',
    edad: 3,
    mostrarEdad() {
        console.log(`La edad es: ${this.edad}`);
    }
}

calcular(nuevaMascota, 5);

export { };
