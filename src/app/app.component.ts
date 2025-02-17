import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MedTableFormComponent} from './components/med-table-form/med-table-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MedTableFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-playground';
}
