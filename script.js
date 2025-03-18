// Importante: 
// 1. Para crear el codigo de un formulario debemos identificar los valores y las acciones a tomar inicialmente,
// 2. Identificado ya los requisitos del ejercicio, lo primero que se debe hacer crear una función que sea llamada
// desde HTML

function calcularEdad() {
// Declaramos las variables que se van a tener en cuenta, usando la palabra reservada let para declarar.
// usamos el metodo document.getElementById, este se usa para obtener elementos del HTML, los valores solicitados al HTMl deben
// ser ingresados entre parentecis y comillas (""), este elemento es el Id de HTML
// Finalmente usamos la propiedad .value para obtener valores en los elementos de entrada como input, textarea y select
    let nacimiento  = document.getElementById ("añoNacimiento").value;
    let actual = document.getElementById ("añoActual").value;
//  posteriormente creamos una tercera variable que en consola calcule el valor esperado, este no toma ni modifica valores en en DOM.
    let resultadoEdad = actual - nacimiento;

// Al ser un ejercicio donde se deben registrar datos, es importante crear una validación para que el usuario diligencie
// todos los campos.
// Usamos la condicional if para validar que la variable no este vacia, si esto es verdadero, comenzamos usando el operador de comparación 
// estricta === así se garantiza que no haya vacios en los datos ingresados, luego usamos el operador logico OR que se usa para validar 
// una o mas condiciones      
    if (actual === "" || actual < 0 ){
// Si el valor arrojado es verdadero, entonces, usamos el id HTML resultadoEdad para mostrar un mensaje "Ingresa valores correctamente"
// Usamos la propiedad innerHTML  para insertar y modificar texto en el dom
        document.getElementById("resultadoEdad").innerHTML = "Ingresa valores correctamente";
// Si la condicional no es verdadera, entonces, se imprime el resultado del calculo de la variable resultadoEdad en el Id HTMl, usando
// la propiedad .InnerHTML y concatenando su resultado.
        } else {
            document.getElementById("resultadoEdad").innerHTML ="Tienes: " + resultadoEdad +" años aproximadamente."
        }    
}




