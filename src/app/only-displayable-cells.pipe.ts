import { Pipe, PipeTransform } from '@angular/core';
import { TableCell } from './models/table-cell.model';

@Pipe({
  name: 'onlyDisplayableCells',
  pure: false
})
export class OnlyDisplayableCellsPipe implements PipeTransform {

  transform(value: TableCell[], ...args: unknown[]): TableCell[] {
    return value.filter(x => x.display === true);
  }

}
