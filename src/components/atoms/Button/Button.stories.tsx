import CustomButton from "./Button";
import AddIcon from '@mui/icons-material/Add'
import { ComponentStory } from '@storybook/react';

import theme from '../../../Theme';
import { ThemeProvider } from '@mui/material/styles';
export default {
    title:"atoms/Button",
    component:CustomButton,
}
const template:ComponentStory<typeof CustomButton>  = (args) => (
    <ThemeProvider theme={theme}><CustomButton 
    startIcon={<AddIcon/>} {...args}/></ThemeProvider>

);

export const Secondary = template.bind({});
Secondary.args={
    color:"secondary",
    children:"add to Library",
}