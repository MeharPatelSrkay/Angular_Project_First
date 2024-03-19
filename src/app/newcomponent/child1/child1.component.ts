import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../../search-filter.pipe';
import * as data from '../../../assets/data/data.json'
// import { RouterModule, Router } from "@angular/router"; 
import { ModifydetailsComponent } from '../modifydetails/modifydetails.component';

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

  // @Output() showtable : boolean = true;

  // onSelect(){ 
  //   this.router.navigate(['/edituser']); 
  // }

  sendId(id : any){
    this.userid = id
    this.modifydetails = true
  }
}
