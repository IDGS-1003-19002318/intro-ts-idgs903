interface Alumno {
    matricula: number;
    nombre: string;
    edad: number;
    correo: string;
    grupo: Grupo;
}

interface Grupo {
    grupo: string;
    year: number;
}

const alumno: Alumno = {
    matricula: 19002318,
    nombre: 'Joshua',
    edad: 22,
    correo: 'josh@mail.com',
    grupo: {
        grupo: 'IDGS903',
        year: 2019,
    }
}
//Consiste en acceder a la propiedad del objeto sin entrar a la jerarquia del objeto
console.log(`La matricula es : ${alumno.matricula}`);
console.log(`El nombre es : ${alumno.nombre}`);
console.log(`De la generacion del grupo : ${alumno.grupo.year}`)


const { matricula, nombre: nom, edad, correo, grupo: xx } = alumno;
const { grupo, year: anio } = xx;

console.log(`La matricula es : ${matricula}`);
console.log(`El nombre es : ${nom}`);
console.log(`El grupo es: ${grupo}`);
console.log(`De la generacion del grupo : ${anio}`);

const gps: string[] = ['IDGS', 'IEVN', 'REDES'];

console.log(`grupo 1: ${gps[0]}`);
console.log(`grupo 2: ${gps[1]}`);
console.log(`grupo 3: ${gps[2]}`);

const [a, , b] = gps;

console.log(`grupo 1: ${a}`);
console.log(`grupo 2: ${b}`);
