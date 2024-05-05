import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput!:ElementRef;
  @ViewChild('myInput') myInput2!:ElementRef;
  reqData = null;
  reqData2 = null;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // Ex - 01 Debounce Time 

    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    searchTerm.pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(res=>{
      console.log(res);
      this.reqData = res

      setTimeout(()=>{
        this.reqData = null
      }, 2000)
    })

    // Ex - 02 DistinctUntilChange
    
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup');
    searchTerm2.pipe(
      map(event => event.target.value),
      debounceTime(500)
    )
    .subscribe(res=>{
      console.log(res);
      this.reqData2 = res

      setTimeout(()=>{
        this.reqData2 = null
      }, 2000)
    })

  }
}
