//Ejemplo
//Sintaxis: Declaracion de funcion
function saludo(nombre){
    console.log(`Hola ${nombre}`)
}
//Invocar, llamar, ejecutar saludo

saludo('Camila')

//sintaxis expresion funcion:
//Se asigna a una constante
const saludo2 = function(nombre='Cucho'){//-> parametro por defecto
    console.log(`Hola ${nombre} como estas`)
}
//invocar saludo2
saludo2()