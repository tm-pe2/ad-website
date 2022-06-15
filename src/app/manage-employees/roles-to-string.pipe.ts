import { Pipe, PipeTransform } from '@angular/core';
import { UserRole } from '../interfaces/User';

@Pipe({
  name: 'rolesToString'
})
export class RolesToStringPipe implements PipeTransform {

  transform(roles : UserRole[]): string {

    var fullStr= "";
    var i: number = 0;

    for(let role of roles){

      switch(role){
        case 1:
          fullStr = fullStr + "Customer"; //isn't possbile...
          break;
        case 2:
            fullStr = fullStr + "Supplier"; //isn't possbile...
            break;
        case 3:
            fullStr = fullStr + "Employee";
            break;
        case 4:
          fullStr = fullStr + "Accountant";
          break;
        case 5:
          fullStr = fullStr + "Technican";
          break;
        case 6:
          fullStr = fullStr + "Support";
          break;
        case 7:
          fullStr = fullStr + "Manager";
          break;
        case 8:
          fullStr = fullStr + "Hr Manager";
          break;
        case 9:
          fullStr = fullStr + "Admin";
          break;
        default:
            fullStr = fullStr + "null";
        }
        i = i + 1;
        if(i > 1){
          fullStr = fullStr + " ,";
        }

      
    }
    return fullStr;
        
      }

}
