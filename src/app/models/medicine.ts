import {FormControl, FormGroup} from '@angular/forms';

export interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  // brands: Brands[];
}

export interface Brands {
  name: string;
  id: string;
  code: string;
}



export interface MedicineForm {
  name: FormControl<string>;
  dosage: FormControl<string>;
  frequency: FormControl<string>;
}

export type MedicineFormGroup = FormGroup<MedicineForm>;
