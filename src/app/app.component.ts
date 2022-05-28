import { Component } from '@angular/core';
import { TableCell } from './models/table-cell.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: TableCell[][] = [
    [
      {
        colspan: 1,
        rowspan: 1,
        value: "a one",
        display: true,
      },
      {
        colspan: 1,
        rowspan: 1,
        value: "a two",
        display: true,
      },
    ],
    [
      {
        colspan: 1,
        rowspan: 1,
        value: "a one",
        display: true,
      },
      {
        colspan: 1,
        rowspan: 1,
        value: "a two",
        display: true,
      },
    ],
  ];
}
