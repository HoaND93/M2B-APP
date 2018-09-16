import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-schedule',
  templateUrl: 'create-schedule.html',
})
export class CreateSchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public date: string;

  ionViewDidLoad() {
    this.date = this.navParams.get('date');
  }

}
