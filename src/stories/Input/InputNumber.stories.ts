import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput } from '../../Input';

let value = "0"

const meta: Meta<typeof NumberInput> = {
  title: 'Input/Number',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    className: {
      type: 'string',
      description: 'className to pass to the input',
    },
    onChange: {
      type: "function",
      name: "onChange",
      description: `onChange event handler \`()=>void\``,
      defaultValue: (e: React.ChangeEvent<HTMLInputElement>) => {
      },
    },
    value: {
      name: "value",
      description: "The content of the input",
      type: "string",
      defaultValue: value,
    },
    placeholder: {
      name: "placeholder",
      description: "The placeholder of the input",
      type: "string"
    },
    varients: {
      name: "varients",
      description: "The varients of the input",
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
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    placeholder: "Input default",
  },
};

export const Primary: Story = {
  args: {
    placeholder: "Input primary",
    varients: "primary",
  },
};