import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  user1List:string[]=[
    'Angular', 'Angular2'
  ];
  user2List:string[]=[];
  user3List:string[]=[];
  
  suscribeList2!: Subscription;
  suscribeList3!: Subscription;
  suscribeMode2 :boolean=false;
  suscribeMode3 :boolean=false;
  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.videoEmit.subscribe(res=>{
      console.log(res)
      this.user1List.push(res)
    })
  }

  // Video Add method
  onclick(video:any){
    // console.log(video.value)
    this.designUtilityService.videoEmit.next(video.value)
  }
  user2Suscribe(){
    if(this.suscribeMode2){
      this.suscribeList2.unsubscribe()
    }else{
      this.suscribeList2 = this.designUtilityService.videoEmit.subscribe((res1:any)=>{
       this.user2List.push(res1)
       })
    }
    this.suscribeMode2 = !this.suscribeMode2
  }
  user3Suscribe(){
    if(this.suscribeMode3){
      this.suscribeList3.unsubscribe()
    }else{
      this.suscribeList3 = this.designUtilityService.videoEmit.subscribe((res1:any)=>{
       this.user3List.push(res1)
       })
    }
    this.suscribeMode3 = !this.suscribeMode3
  }
}
