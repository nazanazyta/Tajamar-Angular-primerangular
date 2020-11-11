import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  templateUrl: './sumarnumeros.component.html',
  styleUrls: ['./sumarnumeros.component.css']
})
export class SumarnumerosComponent implements OnInit {
  public suma: number;
  @ViewChild("cajanumero1") cajanumero1: ElementRef;
  @ViewChild("cajanumero2") cajanumero2: ElementRef;

  sumarNumeros(){
    var num1 = this.cajanumero1.nativeElement.value;
    var num2 = this.cajanumero2.nativeElement.value;
    this.suma = parseInt(num1) + parseInt(num2);
  }

  constructor() { }

  ngOnInit(): void {
  }

}