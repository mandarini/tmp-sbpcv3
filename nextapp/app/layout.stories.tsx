import type { Meta, StoryObj } from '@storybook/react';
import { RootLayout } from './layout';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof RootLayout> = {
  component: RootLayout,
  title: 'RootLayout',
};
export default meta;
type Story = StoryObj<typeof RootLayout>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to RootLayout!/gi)).toBeTruthy();
  },
};
