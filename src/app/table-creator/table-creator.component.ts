import { Component, OnInit } from '@angular/core';
import { TableCell } from '../models/table-cell.model';

@Component({
  selector: 'app-table-creator',
  templateUrl: './table-creator.component.html',
  styleUrls: ['./table-creator.component.css']
})
export class TableCreatorComponent implements OnInit {

  datas: TableCell[][] = [
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
    ]
  ];
 
  public get maxColumnCount(): number {
    let maxRowCount = 0;

    if (this.datas.length > 0) {
      maxRowCount = this.datas[0].length;
    }

    return maxRowCount;
  }

  public get columnCountArray(): number[] {
    let result = new Array(this.maxColumnCount);

    result.forEach((element, index) => {
      element = index;
    });

    return result;
  }

  public get maxRowCount(): number {
    return this.datas.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public addColumn(): void {
    this.datas.forEach(row => {
      row.push({
        colspan: 1,
        rowspan: 1,
        value: "new",
        display: true
      });
    });
  }


  public addRow(): void {
    let newRow: TableCell[] = [];
    for (let index = 0; index < this.maxColumnCount; index++) {
      newRow.push({ colspan: 1, rowspan: 1, value: index.toString(), display: true });
    }
    this.datas.push(newRow);
  }

  public right(cell: TableCell, row: TableCell[]) {
    const cellIndex = row.indexOf(cell);
    const rowIndex = this.datas.indexOf(row);

    if (cellIndex == -1 || rowIndex == -1) {
      console.log('cell or row index not found');
      return;
    }

    if (row.length <= cellIndex + cell.colspan) {
      console.log('can\'t expand!');
      return;
    }

    const nextCell = row[cellIndex + cell.colspan];

    if (nextCell.display === false) {
      console.log('can\'t expand! -> not displayed');
      return;
    }

    if (cell.rowspan !== nextCell.rowspan) {
      console.log('can\'t expand! -> rowspan');
      return;
    }

    cell.value += nextCell.value;
    cell.colspan += nextCell.colspan;
    nextCell.display = false;
  }

  public down(cell: TableCell, row: TableCell[]) {
    const cellIndex = row.indexOf(cell);
    const rowIndex = this.datas.indexOf(row);

    if (cellIndex == -1 || rowIndex == -1) {
      console.log('cell or row index not found');
      return;
    }

    if (this.datas.length <= rowIndex + cell.rowspan) {
      console.log('can\'t expand');
      return;
    }

    const nextCell = this.datas[rowIndex + cell.rowspan][cellIndex];

    if (nextCell.display === false) {
      console.log('can\'t expand! -> not displayed');
      return;
    }

    if (cell.colspan !== nextCell.colspan) {
      console.log('can\'t expand! -> rowspan');
      return;
    }

    cell.value += nextCell.value;
    cell.rowspan += nextCell.rowspan;
    nextCell.display = false;
  }
}
