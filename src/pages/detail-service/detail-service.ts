import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdateServicePage } from '../update-service/update-service';

/**
 * Generated class for the DetailServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-service',
  templateUrl: 'detail-service.html',
})
export class DetailServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public service: any;

  ionViewDidLoad() {
    this.service = this.navParams.get('service');
    console.log(this.service);
  }

  toUpdatePage() {
    this.navCtrl.push(UpdateServicePage,
      {
        service: this.service
      }
    )
  }

}
