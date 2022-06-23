let continuar;
let hierbas
let precioHierbas;
let total = 0;
let usuario = prompt("Ingresá tu usuario para iniciar sesión")
while((usuario === "") || (usuario === " ")){
    usuario = prompt("Ingresá tu usuario nuevamente")
}
alert("Bienvenida/o " + usuario + "!");

class Hierba {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    Iva() {
        this.precio = this.precio * 1.21;
        }
}

    const Hierba1 = new Hierba ("Té Verde", 50);
    const Hierba2 = new Hierba ("Manzanilla", 20);
    const Hierba3 = new Hierba ("Cedrón", 10);
    const Hierba4 = new Hierba ("Cola de Caballo", 75)
    const Hierba5 = new Hierba ("Melisa", 25);
    const Hierba6 = new Hierba ("Tilo", 60)

    const productos = [Hierba1, Hierba2, Hierba3, Hierba4, Hierba5, Hierba6];

    for (const Hierba of productos)
    Hierba.Iva();
    
continuar = confirm("Desea cargar productos?");
while(continuar === true)
{
     hierbas = prompt("Elegí las hierbas que quieras agregarle a tu blend:" + "\n" + "1-" + (Hierba1.nombre) + "\n" + "2-" + (Hierba2.nombre) + "\n" + "3-" + (Hierba3.nombre) + "\n" + "4-" + (Hierba4.nombre) + "\n" + "5-" + (Hierba5.nombre) + "\n" + "6-" + (Hierba6.nombre));
    while(hierbas < 1 || hierbas > 6)
    {
        alert("Error! Debe ingresar un numero entre 1 y 6.")
        hierbas = prompt("Elegí las hierbas que quieras agregarle a tu blend:" + "\n" + "1-" + (Hierba1.nombre) + "\n" + "2-" + (Hierba2.nombre) + "\n" + "3-" + (Hierba3.nombre) + "\n" + "4-" + (Hierba4.nombre) + "\n" + "5-" + (Hierba5.nombre) + "\n" + "6-" + (Hierba6.nombre));  
    }

    alert("Elegiste " + hierbas);
    switch(hierbas)
    {
        case "1":
            precioHierbas = (Hierba1.precio);
        break;
        case "2":
            precioHierbas = (Hierba2.precio);
        break;
        case "3":
            precioHierbas = (Hierba3.precio);
        break;
        case "4":
            precioHierbas = (Hierba4.precio);
        break
        case "5":
            precioHierbas = (Hierba5.precio);
        break;
        case "6":
            precioHierbas = (Hierba6.precio);
        break         
    }
    total = precioHierbas + total;
    continuar = confirm("Desea continuar cargando productos?");
}

alert("El precio total de su compra es: $" + total);