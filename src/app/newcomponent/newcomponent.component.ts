import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../search-filter.pipe';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-newcomponent',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe, Child1Component],
  templateUrl: './newcomponent.component.html',
  styleUrl: './newcomponent.component.css'
})
export class NewcomponentComponent {
  constructor(){}
  // gfg: string = ''; 
  
  // setValue() { 
  //   this.gfg = 'GeeksforGeeks'; 
  // }
  searchtext = false

  searchval : string = "";
  radval : string = "";
  mehar : string = "hello"

}
