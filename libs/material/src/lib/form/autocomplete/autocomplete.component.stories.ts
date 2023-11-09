import {
  moduleMetadata,
  type Meta,
  type StoryObj,
  applicationConfig,
} from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field';
import { provideFormGroup } from '../../api';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<AutocompleteComponent> = {
  component: AutocompleteComponent,
  title: 'AutocompleteComponent',
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
    moduleMetadata({
      imports: [CommonFieldModule, MatAutocompleteModule],
      providers: [provideFormGroup({ name: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<AutocompleteComponent>;

export const Primary: Story = {
  args: {
    name: 'name',
    label: 'Category',
    icon: 'category',
    enums: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'],
  },
};

export const Heading: Story = {
  args: {
    name: 'name',
    label: 'Category',
    icon: 'category',
    enums: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-field works!/gi)).toBeTruthy();
  },
};
