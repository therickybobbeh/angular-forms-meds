import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandForm, MedicineFormGroup } from '../models/medicine';

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
      brands: this.fb.array([this.createBrandForm()]) as FormArray<FormGroup<BrandForm>>
    }) as MedicineFormGroup;
  }

  private createBrandForm(): FormGroup<BrandForm> {
    return this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      id: this.fb.control<string>('', Validators.required),
      code: this.fb.control<string>('', Validators.required)
    }) as FormGroup<BrandForm>;
  }
}
