import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TextFieldComponent } from './text-field.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field/common-field.component';
import { provideFormGroup } from '../../api';

const meta: Meta<TextFieldComponent> = {
  component: TextFieldComponent,
  title: 'TextFieldComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule],
      providers: [provideFormGroup({ name: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<TextFieldComponent>;

export const Primary: Story = {
  args: {
    name: 'name',
    label: 'First Name',
    icon: 'badge',
  },
};

export const Heading: Story = {
  args: {
    name: 'name',
    label: 'First Name',
    icon: 'badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-field works!/gi)).toBeTruthy();
  },
};
