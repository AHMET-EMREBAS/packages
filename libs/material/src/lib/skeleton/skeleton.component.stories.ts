import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkeletonComponent> = {
  component: SkeletonComponent,
  title: 'SkeletonComponent',
};
export default meta;
type Story = StoryObj<SkeletonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/skeleton works!/gi)).toBeTruthy();
  },
};
