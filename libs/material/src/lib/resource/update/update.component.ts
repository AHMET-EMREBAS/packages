import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../form';

@Component({
  selector: 'techbir-update',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<techbir-form> </techbir-form>`,
})
export class UpdateComponent extends FormComponent {}
