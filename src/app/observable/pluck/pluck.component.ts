import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
data:any;
data2:any;
 users = [
    {name: "kiran", skills:"Angular", job:{title:"Web Developer", exp:"10 Year"}},
    {name: "Anup", skills:"Angular" , job:{title:"Web Developer", exp:"10 Year"}},
    {name: "Satish", skills:"Angular", job:{title:"Web Developer", exp:"10 Year"}},
    {name: "Rohit", skills:"Angular", job:{title:"Web Developer", exp:"10 Year"}},
    {name: "John", skills:"Angular", job:{title:"Web Developer", exp:"10 Year"}},
    {name: "Rajesh", skills:"Angular", job:{title:"Web Developer", exp:"10 Year"}},
    {name: "Vivek", skills:"Angular", job:{title:"Web Developer", exp:"10 Year"}}
  ]
  constructor() { }

  ngOnInit(): void {

    // Ex-01

    from(this.users).pipe(
      // map(data=>this.data = data.name),
      pluck('name'),
      toArray()
    )
    .subscribe(res=>{
      // console.log(res);
      this.data = res
    })

    // Ex-02

    from(this.users).pipe(
      // map(data=>this.data = data.name),
      pluck('job' ,'title'),
      toArray()
    )
    .subscribe(res=>{
      // console.log(res);
      this.data2 = res
    })

  }

}
