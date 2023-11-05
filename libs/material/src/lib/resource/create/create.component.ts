import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'techbir-create',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends FormComponent {}
