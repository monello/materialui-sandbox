import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
    title: 'Material-UI/Checkbox',
    component: Checkbox,
    argTypes: {
        color: {
            options: ['default', 'info', 'primary', 'secondary', 'success', 'error', 'warning'],
            control: { type: 'select' }
        },
        onClick: { action: 'clicked' }
    }
}

const Template = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    'aria-label': 'Demo Checkbox'
}

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
    ...Basic.args,
    defaultChecked: true
}

export const Disabled = Template.bind({});
Disabled.args = {
    ...Basic.args,
    disabled: true
}

export const IconCheckbox = Template.bind({});
IconCheckbox.args = {
    ...Basic.args,
    color: 'success',
    icon: <BookmarkBorderIcon />,
    checkedIcon: <BookmarkIcon />,
    onClick: () => { alert("Bookmark Toggled") }
}