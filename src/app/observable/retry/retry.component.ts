import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  details:any;
  fetching:boolean = false;
  status='No Data';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }

  fetchDetails(){
    this.fetching=true;
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      // retry(4)
      retryWhen(err=>err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount>=5){
            throw err;
          }else{
            retryCount = retryCount + 1;
            console.log("retryCount", retryCount);
            return retryCount;
          }
        }, 0)
      ))
    )
    .subscribe(
      (res)=>{
      console.log("res", res)
      this.details = res;
      this.status = 'Data Fetched'
      this.fetching=false;
    },
    (err)=>{
      this.fetching=false;
      this.status = 'Problem Fetching Data'
    },
    ()=>{
      // this.fetching=false;
    }
    )
  }

}
