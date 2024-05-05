import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
 
  userName:string='';
  constructor(private DesignUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    this.DesignUtilityService.userName.subscribe(res=>{
      this.userName = res;
    })
  }
  onChange(event:any){
    console.log(event.value)
    this.DesignUtilityService.userName.next(event.value);
  }
}
