const carrito = [
    {
        nombre: "Lenovo ThinkPad",
        descripcion: "Laptop Oficina",
        tipoProducto: "Computador Portatil",
        modelo: "VG6",
        precio: {
            precioCompra: 1000000,
            precioMinimoVenta: 300
        },
        caracteristicas: {
            dimensiones: {
                alto: 2,
                ancho: "27cm",
                largo: "25cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2024-05-10')
            }
        },
        getPrice: function() {
            return this.precio.precioCompra;
        }
    },
    {//segundo producto
        nombre: "Redragon V65",
        descripcion: "Teclado Mecanico",
        tipoProducto: "Periferico de Computador",
        modelo: "V65",
        precio: {
            precioCompra: 450000,
            precioMinimoVenta: 6000
        },
        caracteristicas: {
            dimensiones: {
                alto: 5,
                ancho: "35cm",
                largo: "10cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2024-01-11')
            }
        },
        getPrice: function() {
            return this.precio.precioCompra;
        }

    },
    {//tercer producto
        nombre: "Airpods Gen 3",
        descripcion: "Auriculares AirPods generacion 3",
        tipoProducto: "Accesorios personales",
        modelo: "Airpods 3",
        precio: {
            precioCompra: 1200000,
            precioMinimoVenta: 1500000
        },
        caracteristicas: {
            dimensiones: {
                alto: 5,
                ancho: "5cm",
                largo: "15mm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date('2024-01-11')
            }
        },
        getPrice: function() {
            return this.precio.precioCompra;
        }

    },
    {//cuarto producto
        nombre: "Iphone 15 PRO MAX",
        descripcion: "Celular iphone 15 PRO MAX",
        tipoProducto: "Smartphone",
        modelo: "15 PRO MAX",
        precio: {
            precioCompra: 3000000,
            precioMinimoVenta: 6500000
        },
        caracteristicas: {
            dimensiones: {
                alto: 15,
                ancho: "7cm",
                largo: "83mm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date('2024-01-11')
            }
        },
        getPrice: function() {
            return this.precio.precioCompra;
        }

    },
    {//cuarto producto
        nombre: "Samsung Odyssey G6",
        descripcion: "Monitor Samsung Oled 27 pulgadas",
        tipoProducto: "Perifericos de computador",
        modelo: "G6",
        precio: {
            precioCompra: 4249900,
            precioMinimoVenta: 5499900
        },
        caracteristicas: {
            dimensiones: {
                alto: 55.42,
                ancho: "61.17cm",
                largo: "26.35cm"
            },
            fabricacion: {
                pais: "Vietnam",
                fecha: new Date('2024-01-11')
            }
        },
        getPrice: function() {
            return this.precio.precioCompra;
        }

    }
];

// Ejemplo de uso
console.log(carrito[0].getPrice()); // Salida: 1000000
carrito.forEach(producto => {
    console.log(producto.nombre)
});
let preciosCompra = carrito.map((producto)=>{
    return producto.precio.precioCompra
})
console.log(preciosCompra)

carrito.forEach(producto => {
    if(producto.caracteristicas.fabricacion.pais === "Taiwan")
        console.log(producto.nombre)
    
    return producto.precio.precioCompra
})

//Filter recorre el arreglo buscando elementos que concuerden con la condicional establecida en el filter, crea nuevo arreglo con los elementos
let productosTaiwan = carrito.filter((producto)=>{
    return producto.caracteristicas.fabricacion.pais === "Taiwan"
})
console.log(productosTaiwan)
let preciosTotalProductos=0;
carrito.forEach((producto)=>{
    preciosTotalProductos += producto.precio.precioCompra;
    return preciosTotalProductos
})
console.log(preciosTotalProductos)

//Reduce: reduce a un solo valor el arreglo con base en una expresion 
let total= 0;
let inventario = carrito.reduce((preciosTotalProductos, producto)=>{
    return preciosTotalProductos+ producto.getPrice()
},0)
console.log(`Sumatoria de precios ${preciosTotalProductos}`)

//imprimir todo:
carrito.forEach(producto => {
        console.log(`Nombre: ${producto.nombre}\nTipo de Producto: ${producto.tipoProducto}\nModelo: ${producto.modelo}\nDimension Largo: ${producto.caracteristicas.dimensiones.largo}\nPais Fabricacion: ${producto.caracteristicas.fabricacion.pais}\n`)
})
//7.1
console.log("Productos que se fabricaron en china")
let productosChina = carrito.filter((producto)=>{
    return producto.caracteristicas.fabricacion.pais === "China"
})
console.log(productosChina)
//7.2
console.log("Productos que miden mas de 2")
let productos2Metros = carrito.filter((producto)=>{
    return producto.caracteristicas.dimensiones.alto > 2
})
console.log(productos2Metros)
//7.3
console.log("Productos que se venden a menos de 10k")
let productosMenor10 = carrito.filter((producto)=>{
    return producto.precio.precioMinimoVenta < 10000
})
console.log(productosMenor10)