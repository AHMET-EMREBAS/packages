import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VIEW_COMPONENT_TOKEN } from '../../api/view.provider';
import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'techbir-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  viewComponent = TableComponent;
  constructor(@Optional() @Inject(VIEW_COMPONENT_TOKEN) viewComponent: any) {
    if (viewComponent) {
      this.viewComponent = viewComponent;
    }
  }
}
