import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Heading",
};
