import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args : any[]): any {
    switch(args[1]){
    case '1':
    return value.filter((e:any)=>{
        return e.Name.toLowerCase().indexOf(args[0].toLowerCase()) > -1;
    });
    break;
    case '2':
    return value.filter((e:any)=>{
      return (e.Phone_no.indexOf(args[0]) == 0) ? true : false;
    });
    break;
    case '3':
    return value.filter((e:any)=>{
        return e.City.toLowerCase().indexOf(args[0].toLowerCase()) > -1;
    });
    break;
    default:
      return value.filter((e:any)=>{
      return e.Name.toLowerCase().indexOf(args[0].toLowerCase()) > -1 ||
             e.City.toLowerCase().indexOf(args[0].toLowerCase()) > -1 ||
            (e.Phone_no.indexOf(args[0]) == 0) ? true : false; 
      })
      break;
  }
  }
}
