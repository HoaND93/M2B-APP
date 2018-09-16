import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListServicesPage } from '../list-services/list-services';

/**
 * Generated class for the CreateServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-service',
  templateUrl: 'create-service.html',
})
export class CreateServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public service = {
    name: '',
    price: ''
  };

  ionViewDidLoad() {
  }

  doCreateService() {
    this.navCtrl.setRoot(ListServicesPage);
  }
}
