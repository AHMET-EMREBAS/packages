import {
  moduleMetadata,
  type Meta,
  type StoryObj,
  applicationConfig,
} from '@storybook/angular';
import { NumberComponent } from './number.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field';
import { provideFormGroup } from '../../api';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<NumberComponent> = {
  component: NumberComponent,
  title: 'NumberComponent',
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
    moduleMetadata({
      imports: [CommonFieldModule],
      providers: [provideFormGroup({ age: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<NumberComponent>;

export const Primary: Story = {
  args: { name: 'age', label: 'Age', icon: 'attach_money' },
};

export const Heading: Story = {
  args: { name: 'age', label: 'Age', icon: 'attach_money' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/number works!/gi)).toBeTruthy();
  },
};
