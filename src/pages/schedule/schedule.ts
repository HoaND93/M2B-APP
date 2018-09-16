import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduleProvider } from '../../providers/schedule/schedule.provider';
import { CreateSchedulePage } from '../create-schedule/create-schedule';
import { DetailSchedulePage } from '../detail-schedule/detail-schedule';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  providers: [ScheduleProvider]
})
export class SchedulePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: ScheduleProvider
  ) {
  }
  public schedule: any = {
    date: '2018-08-28'
  }
  groups: any = 
  [{
    "time": "8:00 am",
    "sessions": [{
      "customer": "Khach hang A",
      "timeStart": "8:00 am",
      "timeEnd": "9:00 am",
      "services": "Haircut",
      "tracks": ["Food"],
      "id": "1"
    }]
  }, {
    "time": "9:15 am",
    "sessions": [{
      "customer": "Khach hang B",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "9:15 am",
      "timeEnd": "9:30 am",
      "tracks": ["Ionic"],
      "id": "2"
    }, {
      "customer": "Khach hang C",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "9:30 am",
      "timeEnd": "9:45 am",
      "tracks": ["Ionic"],
      "id": "3"
    }, {
      "customer": "Khach hang D",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "9:45 am",
      "timeEnd": "10:00 am",
      "tracks": ["Tooling"],
      "id": "4"
    }]
  }, {
    "time": "10:00 am",
    "sessions": [{
      "customer": "Khach hang E",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "10:00 am",
      "timeEnd": "10:15 am",
      "tracks": ["Ionic"],
      "id": "5"
    }, {
      "customer": "Khach hang F",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "10:15 am",
      "timeEnd": "10:30 am",
      "tracks": ["Angular"],
      "id": "6"
    }, {
      "customer": "Khach hang G",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "10:15 am",
      "timeEnd": "10:30 am",
      "tracks": ["Design"],
      "id": "7"
    }, {
      "customer": "Khach hang H",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "10:45 am",
      "timeEnd": "11:00 am",
      "tracks": ["Services"],
      "id": "8"
    }]
  }, {
    "time": "11:00 am",
    "sessions": [{
      "customer": "Khach hang I",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "11:00 am",
      "timeEnd": "11:45 am",
      "tracks": ["Workshop"],
      "id": "9"
    }, {
      "customer": "Khach hang J",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "11:30 am",
      "timeEnd": "12:00 pm",
      "tracks": ["Navigation"],
      "id": "11"
    }]
  }, {
    "time": "12:00 pm",
    "sessions": [{
      "customer": "Khach hang B",
      "services": "Haircut",
      "description": "Come grab lunch with all the Ionic fanatics and talk all things Ionic",
      "timeStart": "12:00 pm",
      "timeEnd": "1:00 pm",
      "tracks": ["Food"],
      "id": "12"
    }]
  }, {
    "time": "1:00 pm",
    "sessions": [{
      "customer": "Khach hang A",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "1:00 pm",
      "timeEnd": "1:15 pm",
      "tracks": ["Communication"],
      "id": "13"
    }, {
      "customer": "Khach hang P",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "1:15 pm",
      "timeEnd": "1:30 pm",
      "tracks": ["Communication"],
      "id": "14"
    }, {
      "customer": "Khach hang O",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "1:30 pm",
      "timeEnd": "2:00 pm",
      "tracks": ["Services"],
      "id": "15"
    }]
  }, {
    "time": "2:00 pm",
    "sessions": [{
      "customer": "Khach hang R",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "2:00 pm",
      "timeEnd": "2:30 pm",
      "tracks": ["Services"],
      "id": "16"
    }, {
      "customer": "Khach hang T",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "2:30 pm",
      "timeEnd": "2:45 pm",
      "tracks": ["Documentation"],
      "id": "17"
    }, {
      "customer": "Khach hang Y",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "2:45 pm",
      "timeEnd": "3:00 pm",
      "tracks": ["Design"],
      "id": "18"
    }]
  }, {
    "time": "3:00",
    "sessions": [{
      "customer": "Khach hang X",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "3:00 pm",
      "timeEnd": "3:30 pm",
      "tracks": ["Angular"],
      "id": "19"
    }, {
      "customer": "Khach hang Z",
      "services": "Haircut",
      "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
      "timeStart": "3:30 pm",
      "timeEnd": "3:45 pm",
      "tracks": ["Navigation"],
      "id": "20"
    }]
  }]
  ;

  ionViewDidLoad() {
    this.provider.getSchedule().subscribe((schedule)=>{
      this.groups = schedule;
    });
  }

  changeDate(){
    
  }

  /**
   * 
   */
  toCreatePage() {
    this.navCtrl.push(CreateSchedulePage,this.schedule);
  }

  /**
   * 
   */
  toDetailPage(session: any) {
    this.navCtrl.push(DetailSchedulePage,{
      sessions: session,
      date: this.schedule.date
    });
  }
}
