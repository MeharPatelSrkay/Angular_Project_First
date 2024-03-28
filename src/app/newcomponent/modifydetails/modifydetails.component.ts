import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as data from '../../../assets/data/data.json'
import country_data from 'countrycitystatejson/src/country-state-city/lib/country.json';
import state_data from 'countrycitystatejson/src/country-state-city/lib/state.json';
import city_data from 'countrycitystatejson/src/country-state-city/lib/city.json';
import { CountrytostatePipe } from '../../countrytostate.pipe';
import { FirstserviceService } from '../../firstservice.service';

@Component({
  selector: 'app-modifydetails',
  standalone: true,
  imports: [CommonModule, FormsModule, CountrytostatePipe],
  templateUrl: './modifydetails.component.html',
  styleUrl: './modifydetails.component.css'
})
export class ModifydetailsComponent{
  // constructor(private router: Router) {}

    // back(): void {
    //   this.router.navigate('..')
    // }

    constructor(private servicefunc : FirstserviceService){}

    addressbtn = false
    addressline1 : string = ""
    addressline2 : string = ""
    selectcountry = "Choose a Country"
    selectstate = "Choose a State"
    selectcity = "Choose a City"
    addressline = ""
    countries = country_data
    states = state_data
    cities = city_data
    usercountry = ""
    userstate = ""


    data = data
    @Input() userid : any;
    @Input() showtog : boolean = false;

    @Output() UpdatedData : EventEmitter<boolean> = new EventEmitter()

    editdets(){
      this.showtog = false
      this.addressbtn = true
    }

    countryname(name : any){
      this.usercountry = name
    }

    statename(name : any){
      this.userstate = name
    }

    addressedit(){
    this.addressline = this.addressline1 + ", " + this.addressline2 + ", " + this.selectcountry + ", " + this.selectstate + ", " + this.selectcity;
      this.addressbtn = false
      this.UpdatedData.emit(false)
      this.servicefunc.updatefunc(this.userid, this.addressline, this.selectcity)
    }

    
  ValidateAlpha(evt: any) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    if (
      (keyCode < 65 || keyCode > 90) &&
      (keyCode < 97 || keyCode > 123) &&
      keyCode != 32
    ) {
      return false;
    }
    return true;
  }
 
  ValidateNum(evt: any) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
