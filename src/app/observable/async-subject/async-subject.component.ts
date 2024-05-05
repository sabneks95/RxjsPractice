import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  VideoValue:string='';
  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.asyncVideoEmit.subscribe((res:any)=>{
      this.VideoValue = res;
      console.log('this.VideoValue', this.VideoValue)
    })
  }

  onclick(video:any){
    console.log(video.value)
    this.designUtilityService.asyncVideoEmit.next(video.value)

  }
  onComplete(){
    this.designUtilityService.asyncVideoEmit.complete()
  }
}
