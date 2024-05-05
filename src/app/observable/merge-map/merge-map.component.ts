import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private designUtilityService:DesignUtilityService ) { }
  
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

    // Ex -02 ==> map-MergeAll

    source.pipe(
      map(res=> this.getData(res)),
      mergeAll()
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer2')
        // console.log(res)
    })

    // Ex -03 ==> Mergemap

    source.pipe(
      mergeMap(res=> this.getData(res)),
    )
    .subscribe(res=>{
      this.designUtilityService.print(res, 'elcontainer3')
        // console.log(res)
    })

    }
  
  getData(data:any){
    return of(data+ " video Uploaded");
  }

}
