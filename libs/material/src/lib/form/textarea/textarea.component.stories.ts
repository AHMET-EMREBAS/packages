import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonFieldModule } from '../common-field/common-field.component';
import { provideFormGroup } from '../../api';

const meta: Meta<TextareaComponent> = {
  component: TextareaComponent,
  title: 'TextareaComponent',

  decorators: [
    moduleMetadata({
      imports: [CommonFieldModule],
      providers: [
        provideFormGroup({ name: '' }),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<TextareaComponent>;

export const Primary: Story = {
  args: { name: 'name' },
};

export const Heading: Story = {
  args: { name: 'name' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/textarea works!/gi)).toBeTruthy();
  },
};
