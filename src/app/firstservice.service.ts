import { Injectable } from '@angular/core';
import * as  data from '../assets/data/data.json'

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  data = data
  constructor() { }
  getdata(){
    return data.data
  }

  updatefunc(id: any, address : any, city : any){
    this.getdata().forEach(datas => {
      if(datas.Id == id){
        Object.assign(datas, {"address" : address})
        if (datas.City != city) {
          datas.City = city
        }
      }
    });
  }

}
