import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

const meta = {
  title: 'Template',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    children: 'Button',
  },
};