import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  techStatus:any;
  techStatus2:any;
  nameStatus:any;
  names:any;
  subscription2! :Subscription;
  constructor(private designUtilityService:DesignUtilityService) { }
  ngOnDestroy(): void {
   this.subscription2.unsubscribe();
  }

  ngOnInit(): void {
    // Ex - 01 (Manual)
    const cusObs1 = new Observable((observer:any)=>{
      setTimeout(()=>{
        observer.next('Angular')
      }, 1000)
       setTimeout(()=>{
        observer.next('Typescript')
      }, 2000)
       setTimeout(()=>{
        observer.next('Html & CSS')
      }, 3000)
       setTimeout(()=>{
        observer.next('JavaScript')
        observer.error(new Error("Limit exceeded"))
      }, 4000)
      setTimeout(()=>{
        observer.next('JQuery')
        observer.complete();
      }, 5000)
    })

    cusObs1.subscribe({
      next: (res:any)=>{
      // console.log(res);
      this.designUtilityService.print(res, 'elContainer')
    },
    error:(error)=>{
      this.techStatus = 'error'
    },
    complete:()=>{
      this.techStatus = 'completed'
    }}
    )

      // Ex - 02 (Custom Interval observable)
      const arr = ['Angular', 'Html', 'css', 'typescript', 'javascript']
      const cusObs2 = new Observable((observer)=>{
        let count = 0;
        setInterval(()=>{
          observer.next(arr[count]);
          count++;
          if(count>=5){observer.complete()}
        }, 1000)
      })

     this.subscription2 = cusObs2.subscribe({
      next:(res) =>{
        // console.log(res);
        this.designUtilityService.print(res, 'elContainer2')
      },
     error: (error)=>{
        this.techStatus2 = 'error'
      },
      complete: ()=>{
        this.techStatus2 = 'completed'
      }}
      )

      // Ex - 03 (Random Names)
      const arr3 = ['Anup', 'John', 'Sharma', 'Kiran']
      const cusObs3 = new Observable(observer=>{
        let count = 0;
        setInterval(()=>{
          observer.next(arr3[count]);
          if(count>=2){observer.error('Error Emit')}
          if(count>=3){observer.complete()}
          count++;
        }, 1000)
      })

      cusObs3.subscribe(
        {
          next:(next)=>{
        console.log(next)
        this.names = next;
      },
      error: (error)=>{
        this.nameStatus = 'error'
      },
      complete: ()=>{
        this.nameStatus = 'completed'
      }})
  }

}

