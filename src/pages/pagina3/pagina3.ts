import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};


constructor(private navParams:NavParams,
            private navCrtl: NavController ){
  this.mutante = this.navParams.get('personaje');
  console.log(navParams);
}

irAtras() {
  this.navCrtl.pop();
}

irRoot() {
  this.navCrtl.popToRoot();
}

}
