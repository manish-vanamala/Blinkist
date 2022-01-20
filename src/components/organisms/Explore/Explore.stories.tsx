import Explore from './Explore';
import { ComponentStory } from "@storybook/react";
import CustomThemeProvider from "../../../ThemeProvider";


import { BrowserRouter as Router} from "react-router-dom";
  

export default {
  title: "organisms/Explore",
  component:Explore,
};
const template: ComponentStory<typeof Explore> = (args) => (
    <Router>
    <CustomThemeProvider>
      <Explore {...args} />
    </CustomThemeProvider>
    </Router>
  );

export const explore = template.bind({});

