import CustomButton from "./CustomButton";
import AddIcon from '@mui/icons-material/Add'
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
export default {
    title:"atoms/Button",
    component:CustomButton,
}
const template:ComponentStory<typeof CustomButton>  = (args) => (
    <CustomThemeProvider>
    <CustomButton 
     {...args}/>
    </CustomThemeProvider>
);

export const Secondary = template.bind({});
Secondary.args={
    color:"secondary",
    startIcon:<AddIcon/>,
    children:"add to Library",
}

export const connect = template.bind({});
connect.args={
    color:"primary",
    children:"connect",
}