import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SelectComponent } from './select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonFieldModule } from '../common-field';
import { provideFormGroup } from '../../api';
import { MatSelectModule } from '@angular/material/select';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'SelectComponent',
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
    moduleMetadata({
      imports: [CommonFieldModule, MatSelectModule],
      providers: [provideFormGroup({ categories: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    icon: 'category',
    name: 'categories',
    enums: ['First', 'Some', 'Other', 'Another', 'Last'],
    multiple: true,
  },
};

export const Heading: Story = {
  args: {
    icon: 'category',
    name: 'categories',
    enums: ['First', 'Some', 'Other', 'Another', 'Last'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/select works!/gi)).toBeTruthy();
  },
};
