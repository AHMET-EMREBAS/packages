import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DateTimeComponent } from './date-time.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonFieldModule } from '../common-field/common-field.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideFormGroup } from '../../api';

const meta: Meta<DateTimeComponent> = {
  component: DateTimeComponent,
  title: 'DateTimeComponent',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      providers: [provideFormGroup({ dob: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<DateTimeComponent>;

export const Primary: Story = {
  args: { name: 'dob', label: 'Dob & Time' },
};

export const Heading: Story = {
  args: { name: 'dob', label: 'Dob & Time' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/date-time works!/gi)).toBeTruthy();
  },
};
