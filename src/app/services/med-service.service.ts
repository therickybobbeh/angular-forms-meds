import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MedicineFormGroup } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedServiceService {

  constructor(private fb: FormBuilder) {}

  createMedicineForm(): MedicineFormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      dosage: this.fb.control<string>('', Validators.required),
      frequency: this.fb.control<string>('', Validators.required),
    }) as MedicineFormGroup;
  }
}
