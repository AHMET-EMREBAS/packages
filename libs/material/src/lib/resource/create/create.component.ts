import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ResourceService } from '../../api';

@Component({
  selector: 'techbir-create',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  static id = 1;
  constructor(private readonly service: ResourceService<any>) {
    const id = CreateComponent.id++;
    this.service.addOneToCache({
      id,
      name: 'Hello there ' + id,
    });
  }
}
