import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { TableCell } from '../models/table-cell.model';

@Component({
  selector: 'app-table-creator',
  templateUrl: './table-creator.component.html',
  styleUrls: ['./table-creator.component.css']
})
export class TableCreatorComponent {
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
