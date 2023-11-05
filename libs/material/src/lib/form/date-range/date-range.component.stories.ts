import type { Meta, StoryObj } from '@storybook/angular';
import { DateRangeComponent } from './date-range.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DateRangeComponent> = {
  component: DateRangeComponent,
  title: 'DateRangeComponent',
};
export default meta;
type Story = StoryObj<DateRangeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/date-range works!/gi)).toBeTruthy();
  },
};
