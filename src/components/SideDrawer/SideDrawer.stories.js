import React from 'react';

import SideDrawer from './SideDrawer'
import Button from '@mui/material/Button';

export default {
    title: 'Material-UI/SideDrawer',
    component: SideDrawer,
}

const Template = (args) => {
    const [drawerIsOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    return (
        <>
            <div style={{ marginLeft: 100 + 'px' }}>
                <Button variant="text" onClick={handleDrawerOpen}>Open</Button>
            </div>
            <SideDrawer {...args} drawerIsOpen={drawerIsOpen} handleDrawerClose={handleDrawerClose} />
        </>
    )
};

export const Basic = Template.bind({});