import { Component, OnInit } from '@angular/core';
import { MedServiceService } from '../../services/med-service.service';
import { MedTableComponent } from '../med-table/med-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-med-table-form',
  imports: [
    MedTableComponent,
    ReactiveFormsModule,
    TableModule
  ],
  templateUrl: './med-table-form.component.html',
  styleUrls: ['./med-table-form.component.css']
})
export class MedTableFormComponent implements OnInit {

  constructor(public medicineFormService: MedServiceService) {}

  ngOnInit(): void {
    this.medicineFormService.initializeForm();
  }

  get formArray() {
    return this.medicineFormService.formArray;
  }

  get medicineForm() {
    return this.medicineFormService.medicineForm;
  }

  undoChanges(index: number): void {
    const originalMedicine = this.medicineFormService.originalState[index];
    const medicineFormGroup = this.medicineFormService.createMedicineForm(originalMedicine);
    this.formArray.setControl(index, medicineFormGroup);
  }

  onSubmit(): void {
    if (this.medicineFormService.medicineForm.valid) {
      console.log('Form Submitted', this.medicineFormService.medicineForm.value);
    } else {
      console.log('Form is invalid');
    }
    //may need to update the original state here
  }
}
