import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cajeros: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'direccion';

  constructor(public navCtrl: NavController, public rest: RestApiProvider) {}

  ionViewDidLoad() {
    this.getCajeros();
  }

  getCajeros() {
    this.rest.getCajeros()
       .subscribe(
         cajeros => this.cajeros = cajeros,
         error =>  this.errorMessage = <any>error);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}
