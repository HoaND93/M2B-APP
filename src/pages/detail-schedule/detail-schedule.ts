import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdateSchedulePage } from '../update-schedule/update-schedule';

/**
 * Generated class for the DetailSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-schedule',
  templateUrl: 'detail-schedule.html',
})
export class DetailSchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sessions: any;
  public date: string;

  ionViewDidLoad() {
    this.sessions = this.navParams.get('sessions');
    this.date = this.navParams.get('date');
    console.log(this.sessions);
  }

  toUpdatePage() {
    this.navCtrl.push(UpdateSchedulePage,{
      sessions: this.sessions,
      date: this.date
    });
  }

}
