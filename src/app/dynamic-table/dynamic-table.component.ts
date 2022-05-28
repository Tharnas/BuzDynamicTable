import { Component, Input, OnInit } from '@angular/core';
import { TableCell } from '../models/table-cell.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  @Input()
  public data: TableCell[][] = [];

  public get maxColumnCount(): number {
    let maxRowCount = 0;

    if (this.data.length > 0) {
      maxRowCount = this.data[0].length;
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
    return this.data.length;
  }

  public addColumn(): void {
    this.data.forEach(row => {
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
    this.data.push(newRow);
  }

  public MergeWithRight(cell: TableCell, row: TableCell[]) {
    const cellIndex = row.indexOf(cell);
    const rowIndex = this.data.indexOf(row);

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

  public MergeWithBelow(cell: TableCell, row: TableCell[]) {
    const cellIndex = row.indexOf(cell);
    const rowIndex = this.data.indexOf(row);

    if (cellIndex == -1 || rowIndex == -1) {
      console.log('cell or row index not found');
      return;
    }

    if (this.data.length <= rowIndex + cell.rowspan) {
      console.log('can\'t expand');
      return;
    }

    const nextCell = this.data[rowIndex + cell.rowspan][cellIndex];

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

  public UnmergeWithRight(cell: TableCell, row: TableCell[]) {
    if (cell.colspan <= 1) {
      console.log('not merged.');
      return;
    }

    const cellIndex = row.indexOf(cell);
    const rowIndex = this.data.indexOf(row);

    if (cellIndex == -1 || rowIndex == -1) {
      console.log('cell or row index not found');
      return;
    }

    if (row.length <= cellIndex + cell.rowspan) {
      console.log('can\'t shrink');
      return;
    }

    const lastCell = row[cellIndex + cell.colspan - 1];
    lastCell.display = true;
    cell.colspan--;
  }

  public UnmergeWithBelow(cell: TableCell, row: TableCell[]) {
    if (cell.rowspan <= 1) {
      console.log('not merged.');
      return;
    }

    const cellIndex = row.indexOf(cell);
    const rowIndex = this.data.indexOf(row);

    if (cellIndex == -1 || rowIndex == -1) {
      console.log('cell or row index not found');
      return;
    }

    if (this.data.length <= rowIndex + cell.rowspan - 1) {
      console.log('can\'t shrink');
      return;
    }

    const lastCell = this.data[rowIndex + cell.rowspan - 1][cellIndex];
    lastCell.display = true;
    cell.rowspan--;
  }

}
