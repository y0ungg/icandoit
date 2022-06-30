import Button from "./Button";

export default {
    title: "Practice/Button",
    component: Button,

    argTypes: {
        color: { control: 'color'},
        size: { control: { type:'radio', options : ['big', 'small'] }},
        text: { control: 'text'}
    }
};

export const StorybookButton = (args) => (
    <Button {...args}></Button>
)