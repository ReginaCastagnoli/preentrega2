
class Conversor{
    constructor(nombreUsuario , monto , moneda , cambio){

        this.nombreUsuario = nombreUsuario;
        this.monto = monto;
        this.moneda = moneda;
        this.cambio = 0;

}

calcularCambio(monto, moneda){

    if(moneda == "DOLARES" || moneda == "dolares"){
        this.cambio  = monto / 1280;
        

    }
    else if (moneda == "EUROS" || moneda == "euros"){
        this.cambio  = monto / 1365;


    }

}

    getDatosCambio(){
        console.log("DETALLES DE CONVERTIBILIDAD:");
        console.log("-Nombre usuario: ", this.nombreUsuario);
        console.log("-Monto en pesos argentinos a cambiar: ", this.monto);
        console.log("-Moneda extranjera elegida: ", this.moneda);
        console.log("-Monto final: ", this.cambio);
    } 
}


function filtrarMoneda(objConversor){
    return objConversor.moneda == nombre
}

 
let nombreUsuario = "";
let fechaVisita = new Date();
let listaConversor = [];

while(nombreUsuario != "SALIR") {
    
    nombreUsuario = prompt("Ingrese su nombre para continuar al sitio o SALIR para no continuar");
    

    if( nombreUsuario != "SALIR"){  

        console.log("Bienvenido a Conversor Pepito," ,nombreUsuario.toUpperCase());

        let monto = parseFloat(prompt("Ingrese el monto que desea cambiar a moneda extranjera"));
        
        console.log("El valor del DOLAR para cambiar hoy", fechaVisita, "es $1280");
        console.log("El valor del EURO para cambiar hoy", fechaVisita, "es $1365");

        let moneda = prompt( " Ingrese el tipo de moneda a la cual quiere pasar: DOLARES | EUROS");
        
        let objConversor = new Conversor (nombreUsuario , monto, moneda);
        objConversor.calcularCambio(monto , moneda);
        listaConversor.push(objConversor);

}
else{
    console.log( "Gracias por visitar este sitio");
}
}

let opciones = prompt ("1) Ver todos los cambios realizados. 2) Busque cambios realizados por moneda extranjera");

let nombre;

if( opciones == "1"){
    console.log("Historial de cambios");
    for (let Conversor of listaConversor){
       Conversor.getDatosCambio();

    }
}

else if( opciones == "2"){

    nombre = prompt ("Ingrese el tipo de moneda extranjera que desea buscar");
    let resultadosFiltro = listaConversor.filter(filtrarMoneda);
        for (let Conversor of resultadosFiltro){
        Conversor.getDatosCambio();
    }
}
