import { Component, OnInit, DoCheck } from '@angular/core';

@Component ({
    selector: "app-ciclos-vida",
    templateUrl: "./ciclosvida.component.html"
})

export class CiclosVida implements OnInit, DoCheck {
    public mensaje: string;

    //CREAMOS UN MÉTODO DE ACCIÓN PARA LLAMARLO CON UN BOTÓN
    cambiarMensaje () {
        this.mensaje = "Y mañana miércoles...";
    }

    constructor (){
        console.log("Constructor, voy primero");
        this.mensaje = "Hoy es martes";
    }

    ngOnInit(): void {
        console.log("Ejecutando método OnInit()");
    }

    ngDoCheck() {
        console.log("Estoy en DoCheck");
    }
}