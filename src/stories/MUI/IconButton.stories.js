import React from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default {
    title: 'Material-UI/IconButton',
    component: IconButton,
    argTypes: {
        color: {
            options: ['info', 'primary', 'secondary', 'success', 'error', 'warning'],
            control: { type: 'select' }
        },
        onClick: { action: 'clicked' }
    }
}

const Template = (args) => <IconButton {...args} />;

export const DeleteButton = Template.bind({});
DeleteButton.args = {
    color: 'primary',
    disabled: false,
    'aria-label': 'delete action',
    children: <DeleteIcon />,
    onClick: () => { alert('Deleted') }
}

export const AlarmButton = Template.bind({});
AlarmButton.args = {
    ...DeleteButton.args,
    'aria-label': 'alarm action',
    children: <AlarmIcon />,
    onClick: () => { alert('Ring Ring!!!') }
}

export const AddToCartButton = Template.bind({});
AddToCartButton.args = {
    ...DeleteButton.args,
    'aria-label': 'alarm action',
    children: <AddShoppingCartIcon />,
    onClick: () => { alert('Added to cart') }
}