import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default {
    title: 'Material-UI/ButtonGroup',
    component: ButtonGroup,
    argTypes: {
        variant: {
            options: ['text', 'contained', 'outlined'],
            control: { type: 'radio' }
        },
        color: {
            options: ['info', 'primary', 'secondary', 'success', 'error', 'warning'],
            control: { type: 'select' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' }
        }
    }
}

const Template = (args) => <ButtonGroup {...args} >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>;

export const Basic = Template.bind({});
Basic.args = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    orientation: 'horizontal',
    disabled: false,
    disableElevation: false,
    'aria-label': 'Example of a group of buttons'
}
