import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideFormGroup } from '../../api';

const meta: Meta<SwitchComponent> = {
  component: SwitchComponent,
  title: 'SwitchComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule, MatSlideToggleModule],
      providers: [provideFormGroup({ switch: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<SwitchComponent>;

export const Primary: Story = {
  args: { name: 'switch', label: 'Switch Value' },
};

export const Heading: Story = {
  args: { name: 'switch', label: 'Switch Value' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/switch works!/gi)).toBeTruthy();
  },
};
