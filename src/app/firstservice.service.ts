import { Injectable } from '@angular/core';
import * as  data from '../assets/data/data.json'

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  data = data
  constructor() { }
  getdata(){
    return data.data[]
  }
}
