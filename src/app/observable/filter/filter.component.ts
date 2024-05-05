import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id:1, name:'kiran', gender:'Male'},
    {id:2, name:'Anup', gender:'Male'},
    {id:3, name:'Priyanka', gender:'Female'},
    {id:4, name:'Vivek', gender:'Male'},
    {id:5, name:'Monika', gender:'Female'},
    {id:6, name:'Rajesh', gender:'Male'},
    {id:7, name:'Neha', gender:'Female'},
    {id:8, name:'Neeraj', gender:'Male'},
    {id:9, name:'Pradeep', gender:'Male'},
    {id:10, name:'Sakshi', gender:'Female'},
    {id:11, name:'Sanjana', gender:'Female'},
    {id:12, name:'Mayur', gender:'Male'},
  ]
  data:any;
  data2:any;
  data3:any;
  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr)

    //  Ex - 01 - Filter By Length
    source.pipe(
      filter(member=> member.name.length > 6),
      toArray()
      )
    .subscribe(res=>{
      this.data = res;
      console.log(res)
    })

    //  Ex - 02 - Filter By Gender
    source.pipe(
      filter(member=> member.gender == 'Male'),
      toArray()
      )
    .subscribe(res=>{
      this.data2 = res;
      console.log(res)
    })

     //  Ex - 03- Filter By nth record
     source.pipe(
      filter(member=> member.id <= 6),
      toArray()
      )
    .subscribe(res=>{
      this.data3 = res;
      console.log(res)
    })
  }

}
