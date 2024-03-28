import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { FormsModule } from '@angular/forms';
import { FirstserviceService } from './firstservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewcomponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  data : any[] = []
  constructor( public servicefunc : FirstserviceService ){}
  setval(){
    this.servicefunc.getdata().forEach(datas => {
      console.log(datas);
      this.data.push(datas)
    });    
    console.log(JSON.stringify(this.data));
  }


  // constructor(){
  //   setTimeout(() => {
  //     this.title = "Change Title";
  //   }, 3000);
  // }
}
