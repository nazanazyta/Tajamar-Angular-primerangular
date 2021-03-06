import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import { PrimerComponente } from './components/primercomponente/primercomponente.component';
import { CiclosVida } from './components/ciclosvida/ciclosvida.component';
import { Deportes } from './components/deportes/deportes.component';
import { NumerosRandom } from './components/numerosrandom/numerosrandom.component';
import { PositivosNegativos } from './components/positivosnegativos/positivosnegativos.component';
import { FormularioPersona } from './components/formulariopersona/formulariopersona.component';
import { FormsModule } from '@angular/forms';
import { SumarnumerosComponent } from './components/sumarnumeros/sumarnumeros.component';

@NgModule({
  declarations: [
    AppComponent
    , PrimerComponente
    , CiclosVida
    , Deportes
    , NumerosRandom
    , PositivosNegativos
    , FormularioPersona, SumarnumerosComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
