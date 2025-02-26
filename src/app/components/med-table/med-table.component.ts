import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MedServiceService } from '../../services/med-service.service';

@Component({
  selector: 'app-med-table',
  templateUrl: './med-table.component.html',
  imports: [
    ReactiveFormsModule,
    TableModule,
    NgClass,
    NgIf,
    NgForOf,
    Ripple,
  ],
  styleUrls: ['./med-table.component.css']
})
export class MedTableComponent implements OnInit {
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

  ngOnInit(): void {}
}
