import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideFormGroup } from '../../api';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonFieldModule } from '../common-field/common-field.component';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'CheckboxComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule, MatCheckboxModule],
      providers: [provideFormGroup({ active: false })],
    }),
  ],
};
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {
    name: 'active',
    label: 'Is user active?',
  },
};

export const Heading: Story = {
  args: { name: 'active', label: 'Is user active?' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/checkbox works!/gi)).toBeTruthy();
  },
};
