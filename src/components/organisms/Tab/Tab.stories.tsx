import Tabs from './Tab';
import { ComponentStory } from "@storybook/react";
import CustomThemeProvider from "../../../ThemeProvider";


  

export default {
  title: "organisms/Tabs",
  component: Tabs,
};
const template: ComponentStory<typeof Tabs> = (args) => (
    <CustomThemeProvider>
      <Tabs {...args} />
    </CustomThemeProvider>
  );

export const tabs = template.bind({});

tabs.args={
    onchange:"clicked",
}
