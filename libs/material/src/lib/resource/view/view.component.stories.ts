import type { Meta, StoryObj } from '@storybook/angular';
import { ViewComponent } from './view.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewComponent> = {
  component: ViewComponent,
  title: 'ViewComponent',
};
export default meta;
type Story = StoryObj<ViewComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/view works!/gi)).toBeTruthy();
  },
};
