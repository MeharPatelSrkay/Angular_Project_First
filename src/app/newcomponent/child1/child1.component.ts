import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../../search-filter.pipe';
import * as data from '../../../assets/data/data.json'
import { ModifydetailsComponent } from '../modifydetails/modifydetails.component';
// import { RouterModule, Router } from "@angular/router"; 

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe, ModifydetailsComponent],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})

export class Child1Component {
  // constructor(
  //   private router: Router) { }
  data = data;
  @Input() searchval : any;
  @Input() radval : any;
  checkselected = false;
  checkbtn = false
  userid = ""
  modifydetails = false
  Mehar = "Hello I m Mehar Patel"
  // countries = country_data.getCountries()

  // @Output() showtable : boolean = true;

  // onSelect(){ 
  //   this.router.navigate(['/edituser']); 
  // }

  sendId(id : any){
    this.userid = id
    this.modifydetails = true
  }

  onmodified(showtablebool : boolean){
    this.modifydetails = showtablebool
  }

  // GetChildData(data : boolean){
  //   this.modifydetails = data;
  // }
}
