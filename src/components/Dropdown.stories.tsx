import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const Default = Template.bind({});
Default.args = {};
