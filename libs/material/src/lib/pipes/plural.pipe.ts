import { Pipe, PipeTransform } from '@angular/core';
import { plural } from '@techbir/utils';

@Pipe({
  name: 'plural',
  standalone: true,
})
export class PluralPipe implements PipeTransform {
  transform(value: string): unknown {
    return plural(value);
  }
}
