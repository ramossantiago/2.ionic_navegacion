import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = "";
  edad: number = 0;


  constructor(public navParams: NavParams, public viewCrtl:ViewController ) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

      console.log(this.nombre, this.edad)

  }

  cerrarConParametros(){

    let data = {
      nombre: "Santiago",
      edad: "39",
      coords: {
        lat: 10,
        lng: -10
      }
    };

    this.viewCrtl.dismiss( data );
  }


  cerrarSinParametros(){
    this.viewCrtl.dismiss();
  }



}
