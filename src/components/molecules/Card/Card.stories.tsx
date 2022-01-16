import CardItems from "./Card";
import { ComponentStory } from '@storybook/react';
import image1 from './3.png';

import theme from '../../../Theme';
import { ThemeProvider } from '@mui/material/styles';
export default {
    title:"molecules/Card",
    component:CardItems,
    argTypes: {
        role: { control: "select", options: ["explore","current","finished"] },
      },
}
const template:ComponentStory<typeof CardItems>  = (args) => (
    <ThemeProvider theme={theme}> <CardItems {...args}/></ThemeProvider>

);

export const Rest = template.bind({});
Rest.args={
    role:"explore",
    content:"add to Library",
    title:"Bring Your Human to Work",
    author:"Erica Keswin",
    image:image1,
}