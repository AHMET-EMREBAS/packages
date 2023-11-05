import type { Meta, StoryObj } from '@storybook/angular';
import { ResourceComponent } from './resource.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ResourceComponent> = {
  component: ResourceComponent,
  title: 'ResourceComponent',
};
export default meta;
type Story = StoryObj<ResourceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/resource works!/gi)).toBeTruthy();
  },
};
