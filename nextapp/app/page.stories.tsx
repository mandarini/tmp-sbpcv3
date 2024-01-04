import type { Meta, StoryObj } from '@storybook/react';
import { Index } from './page';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Index> = {
  component: Index,
  title: 'Index',
};
export default meta;
type Story = StoryObj<typeof Index>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Index!/gi)).toBeTruthy();
  },
};
