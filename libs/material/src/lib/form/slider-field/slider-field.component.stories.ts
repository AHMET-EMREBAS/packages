import type { Meta, StoryObj } from '@storybook/angular';
import { SliderFieldComponent } from './slider-field.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SliderFieldComponent> = {
  component: SliderFieldComponent,
  title: 'SliderFieldComponent',
};
export default meta;
type Story = StoryObj<SliderFieldComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slider-field works!/gi)).toBeTruthy();
  },
};
