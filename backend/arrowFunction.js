//Sintaxis arrow para escribir funciones
const saludo = nombre => console.log(`hola ${nombre}`)

saludo("pepito")
//Reglas
// 1. si el bloque de codigo de una Arrow function solo tiene una linea, no hace faltan los corchetes 
// 2. Si tienen un solo parametro, se puede omitir el parentesis de los parametros
// 3. Si el bloque de codigo de la funcion solo tiene una linea, y esta linea debe retornar un valor es posble omitir el return