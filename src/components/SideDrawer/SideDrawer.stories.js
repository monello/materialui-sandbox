import React from 'react';

import SideDrawer from './SideDrawer'
import Button from '@mui/material/Button';

export default {
    title: 'Material-UI/SideDrawer',
    component: SideDrawer,
}

const Template = (args) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div style={{ marginLeft: 100 + 'px' }}>
                <Button variant="text" onClick={handleDrawerOpen}>Open</Button>
            </div>
            <SideDrawer {...args} open={open} handleDrawerClose={handleDrawerClose} />
        </>
    )
};

export const Basic = Template.bind({});