import {Component, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Table, TableModule} from 'primeng/table';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MedServiceService } from '../../services/med-service.service';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-med-table',
  templateUrl: './med-table.component.html',
  imports: [
    ReactiveFormsModule,
    TableModule,
    NgClass,
    NgIf,
    NgForOf,
    InputText,
  ],
  styleUrls: ['./med-table.component.css']
})
export class MedTableComponent implements OnInit {

  @ViewChild('main_table') main_table!: Table;

  expandedRows: { [key: number]: boolean } = {};

  constructor(public medicineFormService: MedServiceService) {}

  get formArray(): FormArray {
    return this.medicineFormService.formArray;
  }

  getBrandsArray(medicineFormGroup: FormGroup): FormArray {
    return medicineFormGroup.get('brands') as FormArray;
  }

  getOptionsArray(medicineFormGroup: FormGroup): string[] {
    return (medicineFormGroup.get('options') as FormArray).value as string[];
  }

  toggleRow(rowIndex: number): void {
    this.expandedRows[rowIndex] = !this.expandedRows[rowIndex];
  }

  undoChanges(index: number): void {
    this.medicineFormService.undoChanges(index);
  }


  filterGrid(value: string, field: string){

    this.main_table.filter(value, `value.${field}`, 'contains');
  }

  ngOnInit(): void {}
}
