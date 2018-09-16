import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListServicesPage } from '../list-services/list-services';

/**
 * Generated class for the UpdateServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-service',
  templateUrl: 'update-service.html',
})
export class UpdateServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public service: any;

  ionViewDidLoad() {
    this.service = this.navParams.get('service');
  }

  doUpdateService() {
    this.navCtrl.setRoot(ListServicesPage);
  }

}
