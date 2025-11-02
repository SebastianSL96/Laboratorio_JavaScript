class Vehiculo {
    constructor (marca, modelo, placa){
        this.marca = marca; 
        this.modelo = modelo; 
        this.placa = placa;
        this.encendido = false;


    }
            
    encender () {    // Me sali del constructor pero sigo en la clase
        this.encendido = true;
        console.log(`El vehiculo ${this.marca} se encendio `);
    }
    apagar () { 
        this.encendido = false;
        console.log(`El vehiculo ${this.marca} se apago`);

    }
} ;

const auto1 = new Vehiculo("BMW", 2025, "Papitas");
const auto2 = new Vehiculo("JEEP", 2025, "Papitas");

auto1.encender();
auto1.apagar();
auto2.encender();
auto2.apagar();

class Carro extends Vehiculo { // Extends hereda de otra clase 
    constructor(puertas){
        super(this.marca, this.modelo, this.placa) // "super" Traer el constructor de la clse padre
        this.puertas = puertas; 

    }
    abrirPuertas () {
        console.log("Las puertas se abrieron ")
    }
}

class Moto extends Vehiculo { // Extends hereda de otra clase 
    constructor(marca, modelo, placa, cilindraje){
        super(marca, modelo, placa) // "super" Traer el constructor de la clse padre
        this.cilindraje = cilindraje; 

    }
    derrape () {
        console.log(" La moto acaba de derrapar ")
    }
}

const moto1 = new Moto ("Yamaha", 2025, "EPE51D", "150cc")
moto1.encender();
moto1.apagar();

