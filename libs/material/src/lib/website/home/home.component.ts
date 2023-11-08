import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_NAME_TOKEN } from '../../api';
import '@angular/localize/init';

@Component({
  selector: 'techbir-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  constructor(@Inject(APP_NAME_TOKEN) public readonly appName: string) {}
}
