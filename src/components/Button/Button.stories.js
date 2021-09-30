import React from 'react';

import Button from './Button'

export default {
    title: 'MUI/Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['text', 'contained', 'outlined'],
            control: { type: 'select' }
        },
        color: {
            options: ['info', 'primary', 'secondary', 'success', 'error', 'warning'],
            control: { type: 'select' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' }
        },
        onClickHandler: { action: 'clicked' }
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
