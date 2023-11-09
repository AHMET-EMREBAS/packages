import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SliderFieldComponent } from './slider-field.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field';
import { MatSliderModule } from '@angular/material/slider';
import { provideFormGroup } from '../../api';

const meta: Meta<SliderFieldComponent> = {
  component: SliderFieldComponent,
  title: 'SliderFieldComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule, MatSliderModule],
      providers: [provideFormGroup({ range: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<SliderFieldComponent>;

export const Primary: Story = {
  args: {
    name: 'range',
    min: 0,
    max: 100,
    appearance: 'fill',
  },
};

export const Heading: Story = {
  args: {
    name: 'range',
    min: 0,
    max: 100,
    appearance: 'fill',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slider-field works!/gi)).toBeTruthy();
  },
};
