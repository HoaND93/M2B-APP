import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailServicePage } from '../detail-service/detail-service';
import { CreateServicePage } from '../create-service/create-service';

/**
 * Generated class for the ListServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-services',
  templateUrl: 'list-services.html',
})
export class ListServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public listServices = [
    {
      "name": "Haircut",
      "price": "50000"
    },
    {
      "name": "Foot massage",
      "price": "50000"
    },
    {
      "name": "Nails",
      "price": "50000"
    },
    {
      "name": "Skin care",
      "price": "50000"
    }
  ]

  ionViewDidLoad() {
  }

  toDetailService(service) {
    this.navCtrl.push(DetailServicePage,
      {
        service: service
      }
    );
  }

  toCreatePage() {
    this.navCtrl.push(CreateServicePage);
  }

}
