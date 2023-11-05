import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../form/form.component';
import { TextareaComponent } from '../../form/textarea/textarea.component';
import { TextFieldComponent } from '../../form/text-field/text-field.component';

@Component({
  selector: 'techbir-create',
  standalone: true,
  imports: [CommonModule, FormComponent, TextareaComponent, TextFieldComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends FormComponent {}
