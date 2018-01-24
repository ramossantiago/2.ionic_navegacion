import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;


  mutantes:any[] = [
    {
      nombre: "Magneto",
      poder: "controlar metales"
    },
    {
      nombre: "wolverine",
      poder: "Regeneracion"
    },
    {
      nombre: "Profesor X",
      poder: "Psiquico"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos con energia"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irPagina3 (mutante:any){
    this.navCtrl.push( Pagina3Page, {'personaje' : mutante} );
  }

}
