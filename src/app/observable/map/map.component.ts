import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  sub1!: Subscription;
  sub2!: Subscription;
  msg1:any;
  msg2:any;
  constructor(private designUtilityService:DesignUtilityService) {}

  ngOnInit(): void {
    const broadcastVideos = interval(1000);
    
    // Ex - 01
    this.sub1 = broadcastVideos
      .pipe(
        map((data:any) =>
         data = 'Video:'+ data
        )
      )
      .subscribe((res) => {
        // console.log( res);
        this.msg1 = res
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex - 02
    this.sub2 = broadcastVideos
    .pipe(
      map((data:any) =>
       data =  data *2
      )
    )
    .subscribe(res=>{
      console.log(res)
      this.msg2 = res
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex - 03
    const members = from([
      {id: 1, name:"kiran"},
      {id: 2, name:"Anup"},
      {id: 3, name:"Satish"},
      {id: 4, name:"Rohit"},
      {id: 5, name:"John"},
      {id: 6, name:"Rajesh"},
      {id: 7, name:"Vivek"}
    ])

    members.pipe(
      map(data=> data.name)
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elContainer')
      console.log(res)
    })
  }
}
