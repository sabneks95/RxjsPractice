import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  userName:string = '';
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
