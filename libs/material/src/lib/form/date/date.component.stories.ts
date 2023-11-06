import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DateComponent } from './date.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideFormGroup } from '../../api';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonFieldModule } from '../common-field/common-field.component';

const meta: Meta<DateComponent> = {
  component: DateComponent,
  title: 'DateComponent',
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
type Story = StoryObj<DateComponent>;

export const Primary: Story = {
  args: {
    name: 'dob',
    label: 'Date of Birth',
  },
};

export const Heading: Story = {
  args: {
    name: 'dob',
    label: 'Date of Birth',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/date works!/gi)).toBeTruthy();
  },
};
