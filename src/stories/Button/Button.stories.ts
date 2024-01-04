import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    className: {
      type: 'string',
      description: 'className to pass to the button',
    },
    onClick: {
      type: "function",
      name: "onClick",
      description: `onClick event handler \`()=>void\``,
      defaultValue: () => console.log("Clicked"),
    },
    children: {
      name: "children",
      description: "The content of the button",
      type: "string"
    },
    varients: {
      name: "varients",
      description: "The varients of the button",
      type: "string",
      control: { type: 'select' },
      options: ["default", "primary", "secondary", "highlight", "error"]
    },
    disabled: {
      name: "disabled",
      description: "The disabled of the button",
      type: "boolean",
      defaultValue: false
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    varients: "primary",
  },
};