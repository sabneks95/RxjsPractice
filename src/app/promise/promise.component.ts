import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  promiseVal: any;
  constructor() {}
  DellAvailble() {
    return true;
  }

  HPAvailble() {
    return false;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.DellAvailble()) {
        return setTimeout(() => {
          resolve('Dell is avaiable');
        }, 3000);
      } else if (this.HPAvailble()) {
        return setTimeout(() => {
          resolve('HP is avaiable');
        }, 3000);
      } else {
        return setTimeout(() => {
          resolve('Nothing is avaiable');
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        this.promiseVal = res;
      })
      .catch((res) => {
        this.promiseVal = res;
      });
  }
}
