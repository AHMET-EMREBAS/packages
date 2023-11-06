import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { provideFormGroup } from '../../api';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'CheckboxComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatCheckboxModule],
      providers: [provideFormGroup({ active: false }), ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/checkbox works!/gi)).toBeTruthy();
  },
};
