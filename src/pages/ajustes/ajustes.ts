import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from "../index.paginas"
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private modalCrtl:ModalController) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal() {
    let modal = this.modalCrtl.create(ModalPage, {nombre: "Fernando", edad: 30});
    modal.present();

    modal.onDidDismiss(parametros => {

      if (parametros){
        console.log("Datos del modal");
        console.log(parametros);
      }
            
    })
  }

}
