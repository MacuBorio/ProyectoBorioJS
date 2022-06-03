let apodoIngresado = prompt("Ingresa tu apodo")

let mensajeBienvenida = "Bienvenido"

alert(mensajeBienvenida+" "+apodoIngresado+" "+"🙌")

let edad =parseInt(prompt("Ingresa tu edad"));

if (edad==" ") {
    alert("Vuelve a ingresar tu edad")
}

if((edad<=18)||(edad>64)) {
    alert("No tenes que trabajar, disfrutá de tu tiempo!!")
}else{
    alert('Lo siento, eso quiere decir que todavía estás en edad de trabajar!')
}

alert("Vamos a jugar un rato "+apodoIngresado)
alert("Tenes que adivinar en qué número estoy pensando del 1 al 10")

let respuesta=prompt("Ingresa un número")

while(respuesta != 5) {
    respuesta = prompt("Has fallado! Ingresa un nuevo numero " + apodoIngresado);
}

// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
// let resultado = ingresarNumero * i ;
// alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }

