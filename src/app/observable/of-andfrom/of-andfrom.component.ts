import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-andfrom',
  templateUrl: './of-andfrom.component.html',
  styleUrls: ['./of-andfrom.component.scss']
})
export class OfAndfromComponent implements OnInit {

  obsMsg:any;
  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    // Of example:

    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    const obs2 = of({a:'Anup', b:'Shekhar', c:'Sharma'});

    obs1.subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer1')
    })

    obs2.subscribe(res=>{
      this.obsMsg = res;
    })


    //from Example (Using Array):
    const obs3 = from(['Anup', 'Shekhar', 'Sharma']);
    obs3.subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer3')
    })

    //from Example (Using Promise):
    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Promise Resolve');
      }, 3000)
    })
    const obs4 = from(promise);
    obs4.subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer4')
    })

     //from Example (Using String):
     const obs5 = from("promise");
    obs5.subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer5')
    })
  }



}
