import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username:string='';
  constructor(private DesignUtilityService:DesignUtilityService) { }

  ngOnInit(): void {
    this.DesignUtilityService.exclusive.next(true);
    this.DesignUtilityService.userName.subscribe(res=>{
      this.username = res;
    })
  }
  ngOnDestroy(): void {
    this.DesignUtilityService.exclusive.next(false)
  }
}
