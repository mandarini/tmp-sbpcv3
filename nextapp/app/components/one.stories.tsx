import type { Meta, StoryObj } from '@storybook/react';
import { One } from './one';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof One> = {
  component: One,
  title: 'One',
};
export default meta;
type Story = StoryObj<typeof One>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to One!/gi)).toBeTruthy();
  },
};
