import { Button } from "@nstech/atlas";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    children: {
      control: "text",
      defaultValue: "Click me",
    },
    disabled: {
      control: "boolean",
    },
    asChild: {
      table: {
        disable: true, // oculta do painel
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
    asChild: false,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Delete",
    asChild: false,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline",
    asChild: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary",
    asChild: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost",
    asChild: false,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Link",
    asChild: false,
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "🔍",
    variant: "default",
    asChild: false,
  },
};
