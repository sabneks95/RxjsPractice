import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub! :Subscription;
  users=[
    {name:'Kiran', skills:'html, css, Js'},
    {name:'Anup', skills:'Angular'},
    {name:'Satish', skills:'dot net'},
  ];
  constructor() { }

  ngOnInit(): void {
    // Ex-01
    const source = interval(1000);

    this.sourceSub = source.pipe(
      take(5),
      toArray()
      )
    .subscribe(res=>{
      console.log("EX-01==>",res)
    })

    // Ex-02
    const source2 = from(this.users);

    source2.pipe(toArray())
    .subscribe(res=>{
      console.log("EX-02==>",res)
    })

     // Ex-03
     const source3 = of('kirankumar','sabne','Angular')

     source3.pipe(toArray())
     .subscribe(res=>{
      console.log("EX-03==>",res)
     })
  }

}
