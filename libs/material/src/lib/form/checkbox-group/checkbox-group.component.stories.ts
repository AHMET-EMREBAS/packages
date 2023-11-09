import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideFormGroup } from '../../api';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonFieldModule } from '../common-field/common-field.component';
import { CheckboxGroupComponent } from './checkbox-group.component';

const meta: Meta<CheckboxGroupComponent> = {
  component: CheckboxGroupComponent,
  title: 'CheckboxGroupComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule, MatCheckboxModule],
      providers: [provideFormGroup({ permissions: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<CheckboxGroupComponent>;

export const Primary: Story = {
  args: {
    name: 'permissions',
    label: 'Select User Roles',
    options: [
      {
        id: 'user',
        label: 'User',
        children: [
          { id: 'read', label: 'Read' },
          { id: 'write', label: 'Write' },
        ],
      },
      {
        id: 'category',
        label: 'Category',
        children: [
          { id: 'read', label: 'Read' },
          { id: 'write', label: 'Write' },
        ],
      },
    ],
  },
};

export const Heading: Story = {
  args: {
    name: 'permissions',
    label: 'Select User Roles',
    options: [
      {
        id: 1,
        label: 'User',
        children: [
          { id: 'read', label: 'Read' },
          { id: 'write', label: 'Write' },
        ],
      },
      {
        id: 2,
        label: 'Category',
        children: [
          { id: 'read', label: 'Read' },
          { id: 'write', label: 'Write' },
        ],
      },
    ],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/checkbox works!/gi)).toBeTruthy();
  },
};
