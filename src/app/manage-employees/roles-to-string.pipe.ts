import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolesToString'
})
export class RolesToStringPipe implements PipeTransform {

  transform(role : Number = 0): string {
    switch(role){
      case 1:
        return "Customer"; //isn't possbile...
      case 2:
        return "Supplier"; //isn't possbile...
      case 3:
        return "Employee";
      case 4:
        return "Accountant";
      case 5:
        return "Technican";
      case 6:
        return "Support";
      case 7:
        return "Manager";
      case 8:
        return "Hr Manager";
      case 9:
        return "Admin";
      default:
        return "null";
    }
    
  }

}
