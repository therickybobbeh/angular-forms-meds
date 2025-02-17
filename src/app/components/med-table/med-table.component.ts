import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-med-table',
  templateUrl: './med-table.component.html',
  imports: [
    ReactiveFormsModule,
    TableModule,
    NgClass,
    NgIf
  ],
  styleUrls: ['./med-table.component.css']
})
export class MedTableComponent implements OnInit {
  @Input() formArray!: FormArray;
  @Output() undo = new EventEmitter<number>();

  expandedRows: { [key: number]: boolean } = {};

  getBrandsArray(medicineFormGroup: FormGroup): FormArray {
    return medicineFormGroup.get('brands') as FormArray;
  }

  toggleRow(rowIndex: number): void {
    this.expandedRows[rowIndex] = !this.expandedRows[rowIndex];
  }


  ngOnInit(): void {}
}
