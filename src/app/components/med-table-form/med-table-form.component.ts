import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Medicine, MedicineFormGroup} from '../../models/medicine';
import {MedTableComponent} from '../med-table/med-table.component';
import {MedServiceService} from '../../services/med-service.service';

@Component({
  selector: 'app-med-table-form',
  imports: [
    MedTableComponent,
    ReactiveFormsModule
  ],
  templateUrl: './med-table-form.component.html',
  styleUrl: './med-table-form.component.css'
})
export class MedTableFormComponent implements OnInit{
  medicineForm!: MedicineFormGroup;

  constructor(private medicineFormService: MedServiceService) {}

  ngOnInit(): void {
    this.medicineForm = this.medicineFormService.createMedicineForm();
    this.loadMedicineData();
  }

  loadMedicineData(): void {
    // Placeholder for data that would come from a service
    const medicineData: Medicine = {
      name: 'Aspirin',
      dosage: '500mg',
      frequency: 'Twice a day'
    };

    this.medicineForm.patchValue(medicineData);
  }

  onSubmit(): void {
    if (this.medicineForm.valid) {
      console.log('Form Submitted', this.medicineForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
