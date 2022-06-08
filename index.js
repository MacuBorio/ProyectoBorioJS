let continuar;
let hierbas
let precioHierbas;
let total = 0;
let usuario = prompt("Ingresá tu usuario para iniciar sesión")

while((usuario === "") || (usuario === " ")){
    usuario = prompt("Ingresá tu usuario nuevamente")
}
alert("Bienvenida/o " + usuario + "!");
continuar = confirm("Desea cargar productos?");
while(continuar === true)
{
     hierbas = prompt("Elegí las hierbas que quieras agregarle a tu blend:" + "\n" + "1- Té Verde"+ "\n" + "2- Manzanilla" + "\n" + "3- Cedrón" + "\n" + "4- Cola de caballo" + "\n" + "5- Melisa" + "\n" + "6- Tilo");
    while(hierbas < 1 || hierbas > 6)
    {
        alert("Error! Debe ingresar un numero entre 1 y 6.")
        hierbas = prompt("Elegí las hierbas que quieras agregarle a tu blend:" + "\n" + "1- Té Verde"+ "\n" + "2- Manzanilla" + "\n" + "3- Cedrón" + "\n" + "4- Cola de caballo" + "\n" + "5- Melisa" + "\n" + "6- Tilo");  
    }
alert("Elegiste " + hierbas);
    switch(hierbas)
    {
        case "1":
            precioHierbas = 50;
        break;
        case "2":
            precioHierbas = 20;
        break;
        case "3":
            precioHierbas = 10;
        break;
        case "4":
            precioHierbas = 75;
        break
        case "5":
            precioHierbas = 25;
        break;
        case "6":
            precioHierbas = 60;
        break         
    }
    total = precioHierbas + total;
    continuar = confirm("Desea continuar cargando productos?");
}

alert("El precio total de su compra es: $" + total);