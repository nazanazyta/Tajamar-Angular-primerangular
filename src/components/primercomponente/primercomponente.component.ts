import { Component } from '@angular/core';

//DECLARACIÓN DEL COMPONENTE Y SU ESTRUCTURA DE ARCHIVOS
//ADEMÁS DE SU NOMBRE
@Component ({
    //NOMBRE DEL COMPONENTE PARA LA APP
    selector: "app-primercomponente",
    //PLANTILLA PARA EL COMPONENTE (DIBUJO)
    // template: `<h1>Soy el primer componente de Angular</h1>
    //     <h2> {{ nombre }} </h2>
    //     <h2> {{ anio }} </h2>
    // `
    templateUrl: './primercomponente.component.html'
})

//ESTE NOMBRE ES PARA LA DECLARACIÓN EN MODULE
export class PrimerComponente {
    //DECLARAMOS VARIABLES PARA LA CLASE CON TIPO
    public nombre: string;
    public anio: number;
    //LA PRIMERA VEZ QUE ENTRA EN EL COMPONENTE
    //TENEMOS UN CONSTRUCTOR
    constructor (){
        console.log("Creando el primer componente");
        //CON this ACCEDEMOS A LAS PROPIEDADES
        this.nombre = "Nazaret Angular";
        this.anio = 2020;
    }
}