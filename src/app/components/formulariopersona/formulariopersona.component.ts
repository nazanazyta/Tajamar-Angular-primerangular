import { Component } from '@angular/core';

@Component({
    selector: "app-formulario-persona",
    templateUrl: "./formulariopersona.component.html"
})

export class FormularioPersona {
    //DECLARAMOS UN OBJETO COMO MODELO QUE
    //DESEAMOS ENLAZAR CON EL FORMULARIO
    public user: any;
    public mensaje: string;

    constructor(){
        //INICIAMOS EL OBJETO USER (MODEL)
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        };
        this.mensaje = "";
    }

    recibirDatos(){
        this.mensaje = "Datos recibidos";
        console.log(this.user);
    }
}