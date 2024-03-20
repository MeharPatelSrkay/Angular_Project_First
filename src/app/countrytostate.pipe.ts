import { Pipe, PipeTransform } from '@angular/core';
import country_data from 'countrycitystatejson/src/country-state-city/lib/country.json';
import state_data from 'countrycitystatejson/src/country-state-city/lib/state.json';


@Pipe({
  name: 'countrytostate',
  standalone: true
})
export class CountrytostatePipe implements PipeTransform {
  id: any;

  transform(value: any, args : any[]): any {
    switch(args[0]){
      case 'S':
        country_data.forEach(country => {
          if (country.name == args[1]) {
            this.id = country.id
          }
        });
        return value.filter((e:any)=>{
          return e.country_id.indexOf(this.id) > -1;
      });
        break;
      
      case 'C':
        state_data.forEach(state => {
          if(state.name == args[1]){
            this.id = state.id
          }
        });
        return value.filter((e:any)=>{
          return e.state_id.indexOf(this.id) > -1;
      });
        break;
    }
  }
}