import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MedicineFormGroup} from '../../models/medicine';

@Component({
  selector: 'app-med-table',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './med-table.component.html',
  styleUrl: './med-table.component.css'
})
export class MedTableComponent {
  @Input() form!: MedicineFormGroup;



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
}
