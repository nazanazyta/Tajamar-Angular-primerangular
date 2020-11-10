import { Component } from '@angular/core';

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html"
})

export class Deportes {
    public sports: Array<string>;

    constructor(){
        //INICIAMOS LA VARIABLE CON UNA SERIE DE DEPORTES
        this.sports = ["Pádel", "Tenis", "Fútbol", "Baloncesto"];
        // this.sports = ["Pádel", "Tenis", "Fútbol", "Baloncesto", "Surf"];
    }
}