import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-med-table',
  templateUrl: './med-table.component.html',
  imports: [
    ReactiveFormsModule,
    TableModule,
    NgClass,
    NgIf,
    NgForOf,
  ],
  styleUrls: ['./med-table.component.css']
})
export class MedTableComponent implements OnInit {
  @Input() formArray!: FormArray;
  @Output() undo = new EventEmitter<number>();

  // so this passes the key and a boolean. it is read by the tables rowIndex and looks on the
  // index of the array to see if it is true or false
  expandedRows: { [key: number]: boolean } = {};

  // you need to get nested form groups like this when passed via input
  getBrandsArray(medicineFormGroup: FormGroup): FormArray {
    return medicineFormGroup.get('brands') as FormArray;
  }

  getOptionsArray(medicineFormGroup: FormGroup): string[] {
    return (medicineFormGroup.get('options') as FormArray).value as string[];
  }

  toggleRow(rowIndex: number): void {
    this.expandedRows[rowIndex] = !this.expandedRows[rowIndex];
  }

  ngOnInit(): void {}
}
