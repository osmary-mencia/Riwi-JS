// Módulo 3 - JavaScript: Sistema interactivo para solicitar nombre y edad
// Este programa solicita al usuario su nombre y edad, valida las entradas y muestra un mensaje personalizado según la edad.

// Función para solicitar un nombre válido
function pedirNombre() {
  // Se le solicita el nombre al usuario
  const nombre = prompt("Por favor, ingresa tu nombre:");

  // Se valida que el nombre no este vacío ni contener solo espacios
  if (!nombre || nombre.trim() === "") { // Se utiliza trim() para eliminar espacios al inicio y al final
    // Se muestra un mensaje de alerta si el nombre es inválido
    alert("⚠️ El nombre no puede estar vacío. Inténtalo de nuevo.");
    return pedirNombre(); // Se llama a sí misma hasta que el nombre sea válido
  }
  // Se valida que el nombre no contenga números ni caracteres especiales
  if (!/^[a-zA-Z\s]+$/.test(nombre.trim())) {
    // Se muestra un mensaje de alerta si el nombre es inválido
    alert("⚠️ El nombre solo puede contener letras y espacios. Inténtalo de nuevo.");
    return pedirNombre(); // se le vuelve a solicitar el nombre al usuario
  }
  // Si el nombre es válido, se devuelve limpio y sin espacios adicionales
  return nombre.trim();
}

// Función para solicitar una edad válida
function pedirEdad() {
  // Se le solicita la edad al usuario
  const entradaDeEdad = prompt("Por favor, ingresa tu edad:");

  // Se valida que la edad no esté vacía, y que sea no numérica o negativa
  if (!entradaDeEdad || entradaDeEdad.trim() === "") {
    // Si la entrada es inválida, se muestra un mensaje de error y se vuelve a solicitar
    alert("⚠️ La edad no puede estar vacía. Inténtalo de nuevo.");
    return pedirEdad();
  }

  // Se valida que la entrada sea un número positivo entero
  if (!/^\d+$/.test(entradaDeEdad.trim())) {
    // Si la entrada no es un número positivo, se muestra un mensaje de error y se vuelve a solicitar
    alert("⚠️ Ingresa solo números positivos (sin letras ni símbolos).");
    return pedirEdad();
  }

  // Se convierte la entrada a número y se valida que sea un número positivo
  const edad = Number(entradaDeEdad.trim());

  // Se valida que la edad no sea un numero negativo
  if (edad < 0) {
    // Si la edad es negativa, se muestra un mensaje de error y se vuelve a solicitar
    alert("⚠️ La edad no puede ser negativa.");
    return pedirEdad();
  }
  // Si la edad es válida, se devuelve
  return edad;
}

// Inicialización del programa
const nombreUsuario = pedirNombre();
const edadUsuario = pedirEdad();

// Se muestra un mensaje interactivo según la edad
if (edadUsuario < 18) {
  alert(`Hola ${nombreUsuario}, aun eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
} else {
  alert(`Hola ${nombreUsuario}, ya eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}