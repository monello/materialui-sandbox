import React from 'react';

import Button from "@mui/material/Button"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default {
    title: 'Material-UI/Button',
    component: Button,
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
        onClick: { action: 'clicked' }
    }
}

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    disableElevation: false,
    children: 'Button Label'
}

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
    ...Basic.args,
    startIcon: <DeleteIcon />,
    children: 'Delete'
}

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
    ...Basic.args,
    endIcon: <SendIcon />,
    children: 'Send'
}

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
    ...Basic.args,
    startIcon: <DeleteIcon />,
    endIcon: <SendIcon />,
    children: 'Delete and Send'
}
