import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailSchedulePage } from './detail-schedule';

@NgModule({
  declarations: [
    DetailSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailSchedulePage),
  ],
})
export class DetailSchedulePageModule {}
