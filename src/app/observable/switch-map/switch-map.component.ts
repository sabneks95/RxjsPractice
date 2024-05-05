import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'comedy', 'News'])

    // Ex -01 ==> map

    source.pipe(
      map(res=> this.getData(res))
    )
    // .subscribe(res=> res.subscribe(res2=>{
    //   this.designUtilityService.print(res2, 'elcontainer')
    //   console.log(res2)
    // }))
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer')
        // console.log(res)
    })

    // Ex -02 ==> map-SwitchAll

    source.pipe(
      map(res=> this.getData(res)),
      switchAll()
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer2')
        // console.log(res)
    })

    // Ex -03 ==> Switchmap

    source.pipe(
      switchMap(res=> this.getData(res)),
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer3')
        // console.log(res)
    })

    }
  
  getData(data:any){
    return of(data+ " video Uploaded").pipe(delay(1000));
  }


}
