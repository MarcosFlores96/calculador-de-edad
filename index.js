import moment from "moment";
moment.locale('es');
const formato = "dddd Do MMMMM YYYY";

const hoy=("2023-09-09");
const fechaNacimiento = moment("1996-12-04");


const result = fechaNacimiento.diff(hoy, 'days');

console.log("numero de dias", result);
