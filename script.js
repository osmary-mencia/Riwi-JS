const usuarios = [
    {
        id: 1,
        nombre: "Ana Torres",
        edad: 28,
        ciudad: "Bogotá",
        correo: "ana.torres@example.com",
        compras: [
            { producto: "Laptop", precio: 3500 },
            { producto: "Mouse", precio: 50 }
        ]
    },
    {
        id: 2,
        nombre: "Carlos Ruiz",
        edad: 35,
        ciudad: "Medellín",
        correo: "carlos.ruiz@example.com",
        compras: [
            { producto: "Celular", precio: 1200 },
            { producto: "Audífonos", precio: 200 }
        ]
    },
    {
        id: 3,
        nombre: "Laura Gómez",
        edad: 22,
        ciudad: "Cali",
        correo: "laura.gomez@example.com",
        compras: [
            { producto: "Tablet", precio: 800 },
            { producto: "Funda", precio: 30 }
        ]
    },
    {
        id: 4,
        nombre: "Mateo Fernández",
        edad: 42,
        ciudad: "Bogotá",
        correo: "mateo.fernandez@example.com",
        compras: [
            { producto: "Monitor", precio: 1000 }
        ]
    },
    {
        id: 5,
        nombre: "Sofía Martínez",
        edad: 30,
        ciudad: "Barranquilla",
        correo: "sofia.martinez@example.com",
        compras: [
            { producto: "Teclado", precio: 80 },
            { producto: "Mousepad", precio: 20 }
        ]
    }
];


// Listar los nombres de todos los usuarios.
usuarios.forEach((item)=> console.log(`${item.nombre}`));

// Filtrar usuarios que vivan en Bogotá.
const bogotanos = usuarios.filter((item) => item.ciudad == 'Bogotá' );
console.log(bogotanos);

// Obtener un arreglo con los correos electrónicos.
const correos = usuarios.map((item) => item.correo);
console.log(correos);

// Sumar las edades de todos los usuarios.
const sumaEdades = usuarios.reduce((total, usuario) => total + usuario.edad, 0);
console.log(sumaEdades);

// Encontrar el usuario con mayor edad.
const mayorEdad = usuarios.reduce((mayor, usuario) => {
  return (usuario.edad > mayor.edad) ? usuario : mayor;
});
console.log(mayorEdad);

// Verificar si algún usuario tiene menos de 25 años.
const hayMenores = usuarios.some(usuario => usuario.edad < 25);
console.log(hayMenores);

// Agregar una nueva compra al usuario con ID 3.
const nuevaCompra = { producto: "Power Bank", precio: 100 };

usuarios.forEach(usuario => {
  if (usuario.id === 3) {
    usuario.compras.push(nuevaCompra);
  }
});
console.log(usuarios[2]); 

// Calcular el total gastado por cada usuario.
usuarios.forEach(usuario => {
  const total = usuario.compras.reduce((suma, compra) => suma + compra.precio, 0);
  console.log(`${usuario.nombre} ha gastado $${total}`);
});

// Crear un nuevo arreglo con el nombre y ciudad de cada usuario.
const resumen = usuarios.map(usuario => ({
  nombre: usuario.nombre,
  ciudad: usuario.ciudad
}));
console.log(resumen);

// Ordenar los usuarios por edad de menor a mayor.
const ordenados = [...usuarios].sort((a, b) => a.edad - b.edad);
console.log(ordenados);

// Contar cuántos usuarios hay por ciudad.
const conteoCiudades = usuarios.reduce((conteo, usuario) => {
  conteo[usuario.ciudad] = (conteo[usuario.ciudad] || 0) + 1;
  return conteo;
}, {});
console.log(conteoCiudades);

// Eliminar al usuario con ID 2.
const sinCarlos = usuarios.filter(usuario => usuario.id !== 2);
console.log(sinCarlos);

// Modificar el correo del usuario llamado "Mateo Fernández".
usuarios.forEach(usuario => {
  if (usuario.nombre === "Mateo Fernández") {
    usuario.correo = "mateo@example.com";
  }
});
console.log(usuarios[3]); // Mateo

// Buscar el primer usuario que compró un “Mouse”.
const comproMouse = usuarios.find(usuario =>
  usuario.compras.some(compra => compra.producto === "Mouse")
);
console.log(comproMouse);

// Crear una función que reciba un nombre y devuelva las compras de ese usuario.
function obtenerComprasPorNombre(nombre) {
  const usuario = usuarios.find(u => u.nombre === nombre);
  return usuario ? usuario.compras : [];
}

console.log(obtenerComprasPorNombre("Laura Gómez"));
