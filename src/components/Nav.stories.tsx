import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Nav } from "./Nav";

export default {
  title: "Components/Nav",
  component: Nav,
  // Read: https://storybook.js.org/addons/storybook-addon-react-router-v6
  decorators: [withRouter],
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Top stories",
};
