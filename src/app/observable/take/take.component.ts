import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames= ["Kiran", "Kumar", "Sabne", "Anup", "Jhon","Alex", "robert"];
  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {

    const nameSource = from(this.randomNames);

    // Ex - 01 | Take

    nameSource.pipe(take(5))
    .subscribe(res=>{
      console.log(res)
      this.designUtilityService.print(res, 'container1')
    })

     // Ex - 02 | TakeLast
     nameSource.pipe(takeLast(5))
    .subscribe(res=>{
      console.log(res)
      this.designUtilityService.print(res, 'container2')
    })

    // Ex - 03 | TakeUntill
    const source = interval(1000);
    let condition = timer(5000);
    let condition2 = fromEvent(document, 'click');
    source.pipe(map(res=>"Number: " +res),takeUntil(condition2))
    .subscribe(res=>{
      console.log(res)
      this.designUtilityService.print(res, 'container3')
    })
  }

}
