import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdateSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-schedule',
  templateUrl: 'update-schedule.html',
})
export class UpdateSchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sessions: any;
  public date: string;

  ionViewDidLoad() {
    this.sessions = this.navParams.get('sessions');
    this.date = this.navParams.get('date');
  }

}
