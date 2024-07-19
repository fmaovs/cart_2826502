//definir un arreglo de nombres de productos
const nombres = ['Lapiz HB', 'Resaltador', 'Marcador']
console.table(nombres[2])
//agregar elementos al arreglo 
nombres[3]='Micropunta'
console.table(nombres[3]);
//agregar elemento al final
nombres.push('Pincel')
console.table(nombres);
//agregar elemento al inicio
nombres.unshift('Borrador Miga de Pan')
//elimiar elementos
delete nombres[3]
//eliminar elemento del final
nombres.pop();
//eliminar elementos del principio
nombres.shift();
//Recorrer un arreglo
for (i = 0 ;i < nombres.length ;i++){
    console.table('nombre producto '+ nombres[i])
}
console.log(nombres);
//operador spread con arreglos
const nombres2 = [
    'Transportador',
    'Regla 30cm'
]

const productos =[...nombres,...nombres2]
console.table(productos)