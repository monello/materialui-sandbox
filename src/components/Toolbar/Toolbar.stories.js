import React from 'react';

import Toolbar from './Toolbar'

export default {
    title: 'Material-UI/Toolbar',
    component: Toolbar,
    argTypes: {
        variant: {
            options: ['dense', 'regular'],
            control: { type: 'radio' }
        }
    }
}

const Template = (args) => {
    const [_, setAnchorEl] = React.useState(null);
    const [_1, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return <Toolbar {...args} handleProfileMenuOpen={handleProfileMenuOpen} handleMobileMenuOpen={handleMobileMenuOpen} />
};

export const Basic = Template.bind({});
Basic.args = {
    menuId: 'primary-search-account-menu',
    mobileMenuId: 'primary-search-account-menu-mobile',
    variant: 'regular'
}