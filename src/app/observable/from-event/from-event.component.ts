import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn!:ElementRef; 
  constructor(private designUtilityService:DesignUtilityService) { }
  
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    let count = 1
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      let countVal ='Video: ' + count++
      this.designUtilityService.print(countVal, 'elContainer');
      this.designUtilityService.print(countVal, 'elContainer2');
    })
  }
}