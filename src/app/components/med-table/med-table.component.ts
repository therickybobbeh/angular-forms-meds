import { Component, Input, OnInit } from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MedicineFormGroup } from '../../models/medicine';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-med-table',
  templateUrl: './med-table.component.html',
  imports: [
    TableModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./med-table.component.css']
})
export class MedTableComponent implements OnInit {
  @Input() formArray!: FormArray;

  getBrandsArray(medicineFormGroup: FormGroup): FormArray {
    return medicineFormGroup.get('brands') as FormArray;
  }

  ngOnInit(): void {}
}



  // get nameControl(): FormControl {
  //   return this.form.get('name') as FormControl;
  // }
  //
  // get dosageControl(): FormControl {
  //   return this.form.get('dosage') as FormControl;
  // }
  //
  // get frequencyControl(): FormControl {
  //   return this.form.get('frequency') as FormControl;
  // }

