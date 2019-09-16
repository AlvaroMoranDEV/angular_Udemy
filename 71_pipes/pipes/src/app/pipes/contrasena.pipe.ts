import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
    if (activar) {
      let returnString:string = "";
      let numero:number = value.length;
      for (let index:number = 0; index < value.length; index ++) {
        returnString +="*";
      }
      return returnString;
    } else {
      return value;
    }
  }

}
