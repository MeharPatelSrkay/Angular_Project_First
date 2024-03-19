import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as data from '../../../assets/data/data.json'
import * as add_data from '../../../assets/data/State-city.json'

@Component({
  selector: 'app-modifydetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifydetails.component.html',
  styleUrl: './modifydetails.component.css'
})
export class ModifydetailsComponent {
  // constructor(private router: Router) {}

    // back(): void {
    //   this.router.navigate('..')
    // }

    addressbtn = false
    addressline1 : string = ""
    addressline2 : string = ""
    selectstate = "Choose a State"
    selectcity = "Choose a City"
    addressline = ""


    data = data
    add_data = add_data
    @Input() userid : any;
    @Input() showtog : boolean = false;

    @Output() modifydetails : boolean = false

    editdets(){
      this.showtog = false
      this.addressbtn = true
    }

    addressedit(){
      this.addressline = this.addressline1 + this.addressline2 + this.selectstate + this.selectcity;
      this.modifydetails = true
      data.data.forEach(datas => {
        if(datas.Id == this.userid){
          Object.assign(datas, {"address" : this.addressline})
        }
      });
    }
}
