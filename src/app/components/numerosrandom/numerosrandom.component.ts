import { Component } from '@angular/core';

@Component ({
    selector: "app-numeros-random",
    templateUrl: "./numerosrandom.component.html",
    styleUrls: ["./numerosrandom.component.css"]
})

export class NumerosRandom {
    public numeros: Array<number>;

    constructor(){
        console.log("Constructor");
        this.numeros = [5,7,14];
    }

    generarNumero(){
        var aleat = Math.floor(Math.random() * 20) + 1;
        // this.numeros.push(Math.floor(Math.random() * 1100) + 1);
        this.numeros.push(aleat);
    }
}