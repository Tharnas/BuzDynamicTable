import { Component, OnInit } from '@angular/core';
import { TableCell } from '../models/table-cell.model';

@Component({
  selector: 'app-table-creator',
  templateUrl: './table-creator.component.html',
  styleUrls: ['./table-creator.component.css']
})
export class TableCreatorComponent implements OnInit {
  //   displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  //   dataSource: {name:string, weight: number, symbol:string, position:string}[] = [
  // { 
  //   name: "name1",
  //   weight: 11,
  //   symbol: "symbol1",
  //   position: "position1"
  // },
  // { 
  //   name: "name2",
  //   weight: 12,
  //   symbol: "symbol2",
  //   position: "position2"
  // },
  // { 
  //   name: "name3",
  //   weight: 13,
  //   symbol: "symbol3",
  //   position: "position3"
  // },
  // { 
  //   name: "name4",
  //   weight: 14,
  //   symbol: "symbol4",
  //   position: "position4"
  // },
  //   ];


  datas: TableCell[][] = [
    [
      {
        colspan: 1,
        rowspan: 1,
        value: "a one"
      },
      {
        colspan: 2,
        rowspan: 1,
        value: "spaaaaan"
      },
      {
        colspan: 1,
        rowspan: 1,
        value: "a four"
      },
      {
        colspan: 1,
        rowspan: 2,
        value: "a five"
      },
    ],
    [
      {
        colspan: 1,
        rowspan: 1,
        value: "a one"
      },
      {
        colspan: 1,
        rowspan: 1,
        value: "a two"
      },
      {
        colspan: 2,
        rowspan: 1,
        value: "spaaaaan"
      },
    ],
  ];

  public get maxColumnCount(): number {
    let maxRowCount = 0;

    this.datas.forEach(row => {
      let countOfColumnsInCurrentRow = 0;

      row.forEach(cell => {
        countOfColumnsInCurrentRow += cell.colspan;
      });

      if (countOfColumnsInCurrentRow > maxRowCount) {
        maxRowCount = countOfColumnsInCurrentRow;
      }
    });

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
        value: "new"
      });
    });
  }


  public addRow(): void {
    let newRow = [];
    for (let index = 0; index < this.maxColumnCount; index++) {
      newRow.push({ colspan: 1, rowspan: 1, value: index.toString() });
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

    if (row.length <= cellIndex + 1) {
      console.log('can\'t expand!');
      return;
    }

    const nextCell = row[cellIndex + 1];

    cell.value += nextCell.value;
    cell.colspan += nextCell.colspan;
    row.splice(cellIndex + 1, 1);
  }

  public down(cell: TableCell, row: TableCell[]) {
    const cellIndex = row.indexOf(cell);
    const rowIndex = this.datas.indexOf(row);

    if (cellIndex == -1 || rowIndex == -1) {
      console.log('cell or row index not found');
      return;
    }

    if (this.datas.length <= rowIndex + 1) {
      console.log('can\'t expand');
      return;
    }

    cell.rowspan = cell.rowspan + 1;
  }
}
