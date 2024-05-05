import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  obsSub! : Subscription;
  obsSub2! : Subscription;
  myColor:string='';
  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const source = interval(1000)
    //  Ex - 01
    const arr = ['Anup', 'Kiran', 'satish', 'John', 'Alex']

   this.obsSub = source.pipe(
    tap( res=>{
      if(res > 3){
        this.obsSub.unsubscribe();
      }
    }),
      map(data => arr[data])
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer')
      console.log(res)
    })

    // Ex-02
    const colors = ['Red', 'Green', 'Blue', 'Pink', 'Orange']

   this.obsSub2 = source.pipe(
    tap( res=>{
      this.myColor = colors[res]
      if(res > 3){
        this.obsSub2.unsubscribe();
      }
    }),
      map(data => colors[data])
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer2')
      console.log(res)
    })
  }

}
