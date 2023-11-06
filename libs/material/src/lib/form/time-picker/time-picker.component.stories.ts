import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TimePickerComponent } from './time-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideFormGroup } from '../../api';
import { CommonFieldModule } from '../common-field/common-field.component';

const meta: Meta<TimePickerComponent> = {
  component: TimePickerComponent,
  title: 'TimePickerComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule],
      providers: [provideFormGroup({ time: '' })],
    }),
  ],
};
export default meta;

type Story = StoryObj<TimePickerComponent>;

export const Primary: Story = {
  args: { name: 'time' },
};

export const Heading: Story = {
  args: { name: 'time' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/time-picker works!/gi)).toBeTruthy();
  },
};
