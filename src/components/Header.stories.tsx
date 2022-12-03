import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [withRouter],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
