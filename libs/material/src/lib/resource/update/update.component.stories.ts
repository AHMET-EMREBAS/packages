import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateComponent } from './update.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateComponent> = {
  component: UpdateComponent,
  title: 'UpdateComponent',
};
export default meta;
type Story = StoryObj<UpdateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/update works!/gi)).toBeTruthy();
  },
};
