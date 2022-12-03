import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Logo } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
  decorators: [withRouter],
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});
Default.args = {};
