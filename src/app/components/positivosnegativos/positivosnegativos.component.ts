import { Component } from '@angular/core';

@Component({
    selector: "app-positivos-negativos",
    templateUrl: "./positivosnegativos.component.html",
    styleUrls: ["./positivosnegativos.component.css"]
})

export class PositivosNegativos {
    public numeros: Array<number>;

    constructor(){
        console.log("Constructor de PositivosNegativos");
        this.numeros = [1,-2,0];
    }

    generarNumero(){
        var aleat = Math.floor(Math.random() * 20) - 10;
        this.numeros.push(aleat);
    }
}