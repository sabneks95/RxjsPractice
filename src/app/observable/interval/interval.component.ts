import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg:any;
  videoSubscription!: Subscription;

  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    // const broadcastVideo = interval(1000);
    const broadcastVideo = timer(3000, 1000);

    this.videoSubscription = broadcastVideo.subscribe(res=>{
      this.obsMsg = 'Video: ' +res;
      this.designUtilityService.print(this.obsMsg, 'elContainer1');
      this.designUtilityService.print(this.obsMsg, 'elContainer2');
      this.designUtilityService.print(this.obsMsg, 'elContainer3');

      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
