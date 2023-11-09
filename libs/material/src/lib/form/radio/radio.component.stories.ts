import {
  moduleMetadata,
  type Meta,
  type StoryObj,
  applicationConfig,
} from '@storybook/angular';
import { RadioComponent } from './radio.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field';
import { provideFormGroup } from '../../api';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<RadioComponent> = {
  component: RadioComponent,
  title: 'RadioComponent',
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
    moduleMetadata({
      imports: [CommonFieldModule],
      providers: [provideFormGroup({ gender: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<RadioComponent>;

export const Primary: Story = {
  args: { name: 'gender', label: 'Gender', enums: ['male', 'female'] },
};

export const Heading: Story = {
  args: { name: 'gender', label: 'Gender', enums: ['male', 'female'] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/radio works!/gi)).toBeTruthy();
  },
};
