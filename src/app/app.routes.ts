import { Routes } from '@angular/router';
import { ModifydetailsComponent } from './newcomponent/modifydetails/modifydetails.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path : '', component : AppComponent},
    { path : 'edituser', component : ModifydetailsComponent},
];
