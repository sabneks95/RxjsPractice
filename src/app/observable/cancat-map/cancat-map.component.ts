import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-cancat-map',
  templateUrl: './cancat-map.component.html',
  styleUrls: ['./cancat-map.component.scss']
})
export class CancatMapComponent implements OnInit {

  constructor(private designUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'comedy', 'News']);

    // Ex -01 ==> map

    source.pipe(
      map(res=> this.getData(res))
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer')
        // console.log(res)
    })

    // Ex -02 ==> map + concatAll

    source.pipe(
      map(res=> this.getData(res)),
      concatAll()
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer2')
        // console.log(res)
    })

     // Ex -03 ==> concatMap

     source.pipe(
      concatMap(res=> this.getData(res))
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer3')
        // console.log(res)
    })
  }

  getData(data:any){
    return of(data+ " video Uploaded").pipe(delay(2000))
  }

}
