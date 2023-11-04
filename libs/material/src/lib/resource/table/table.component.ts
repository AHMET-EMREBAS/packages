import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../../api';
import { Observable } from 'rxjs';

@Component({
  selector: 'techbir-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  readonly data$: Observable<any> = this.service.entities$;

  constructor(private readonly service: ResourceService<any>) {}
}
