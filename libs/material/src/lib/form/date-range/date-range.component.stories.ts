import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DateRangeComponent } from './date-range.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideFormGroup } from '../../api';

const meta: Meta<DateRangeComponent> = {
  component: DateRangeComponent,
  title: 'DateRangeComponent',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [provideFormGroup({ range: '' })],
    }),
  ],
};
export default meta;
type Story = StoryObj<DateRangeComponent>;

export const Primary: Story = {
  args: {
    name: 'range',
  },
};

export const Heading: Story = {
  args: {
    name: 'range',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/date-range works!/gi)).toBeTruthy();
  },
};
