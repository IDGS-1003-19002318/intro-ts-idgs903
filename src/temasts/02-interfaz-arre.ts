// export 
interface Alumno {
    nombre: string;
    matricula: string | number;
    email?: string;
}

const alumno: Alumno = {
    nombre: 'Joshua',
    matricula: 19002318,
    email: 'josh@mail.com',
}

console.table(alumno);

let mascotas = ['perro', 'gato', 'perico'];
mascotas[1] = 'loro';
mascotas.push('iguana');

let tem: (string | number)[] = ['hola', 2, 'adios', 3];

tem.push('nombre');
tem.push(244);

console.log(mascotas);

export { };