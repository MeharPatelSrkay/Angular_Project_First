import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewcomponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  // constructor(){
  //   setTimeout(() => {
  //     this.title = "Change Title";
  //   }, 3000);
  // }
}
