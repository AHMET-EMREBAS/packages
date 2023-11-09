import {
  moduleMetadata,
  type Meta,
  type StoryObj,
  applicationConfig,
} from '@storybook/angular';
import { SearchComponent } from './search.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field';
import { ResourceService, provideFormGroup } from '../../api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BehaviorSubject, map, of, switchMap } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';

class MockResourceService {
  allEntities$ = of([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
    { id: 6, name: 'Category 6' },
    { id: 7, name: 'Category 7' },
    { id: 8, name: 'Category 8' },
  ]);

  searchText$ = new BehaviorSubject<string>('');

  entities$ = this.searchText$.pipe(
    switchMap((text) => {
      return this.allEntities$.pipe(
        map((obj) => {
          const result = obj.filter((e) => {
            console.log(text, ' << text');
            return e.name.toLowerCase().includes(text.toLowerCase());
          });

          console.log('FOund : ', result);

          return result;
        })
      );
    })
  );

  search(text: string) {
    this.searchText$.next(text);
  }
}

const meta: Meta<SearchComponent> = {
  component: SearchComponent,
  title: 'SearchComponent',

  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
    moduleMetadata({
      imports: [CommonFieldModule, ScrollingModule],
      providers: [
        provideFormGroup({ category: '' }),
        {
          provide: ResourceService,
          useClass: MockResourceService,
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<SearchComponent>;

export const Primary: Story = {
  args: {
    name: 'category',
    icon: 'category',
    label: 'Select Category',
  },
};

export const Heading: Story = {
  args: {
    name: 'category',
    icon: 'category',
    label: 'Select Category',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/search works!/gi)).toBeTruthy();
  },
};
