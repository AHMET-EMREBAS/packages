import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';

@Component({
  selector: 'techbir-checkbox-group',
  standalone: true,
  imports: [CommonFieldModule, MatCheckboxModule],
  templateUrl: './checkbox-group.component.html',
  styles: [],
})
export class CheckboxGroupComponent extends CommonFieldComponent {
  __intermediate: any = {};
  __parentValues: any = {};

  setParentValue(event: MatCheckboxChange, parentId: any) {
    const found = this.options?.find((e) => e.id === parentId);

    if (found) {
      this.__parentValues[parentId] = event.checked;

      if (found.children) {
        found.children.forEach((e) => (e.value = event.checked));
      }
    }
    this.__intermediate[parentId] = false;
    this.setControlValue();
  }

  setChildValue(event: MatCheckboxChange, parentId: any, childId: any) {
    const found = this.options?.find((e) => e.id === parentId);

    if (found) {
      const foundChild = found.children?.find((e) => e.id === childId);

      if (foundChild) {
        foundChild.value = event.checked;
      }

      const isAllChecked = found.children
        ?.map((v) => v.value)
        .reduce((p, c) => p && c);

      const isAllUnChecked = found.children
        ?.map((e) => e.value)
        .reduce((p, c) => !p && !c);

      if (isAllChecked) {
        this.__parentValues[parentId] = true;
        this.__intermediate[parentId] = false;
      } else if (isAllUnChecked) {
        this.__intermediate[parentId] = false;
        this.__parentValues[parentId] = false;
      } else {
        this.__intermediate[parentId] = true;
      }
    }
    this.setControlValue();
  }

  setControlValue() {
    const currentValue = this.options
      ?.map((e) => ({
        [e.id]:
          e.children
            ?.map((k) => ({ [k.id]: k.value }))
            .reduce((p, c) => ({ ...p, ...c })) || this.__parentValues[e.id],
      }))
      .reduce((p, c) => ({ ...p, ...c }));

    this.control?.setValue(currentValue);
    return currentValue;
  }
}
