import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'techbir-resource',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent {
  title = inject(Title);
  
}
