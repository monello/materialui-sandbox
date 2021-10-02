import React from 'react';

import Box from '@mui/material/Box';
import SpeedDial from './SpeedDial'

export default {
    title: 'Material-UI/SpeedDial',
    component: SpeedDial,
    decorators: [
        (Story) => (
            <Box sx={{ height: 500, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Story />
            </ Box>
        ),
    ],
}

const Template = (args) => <SpeedDial {...args} />;

export const Basic = Template.bind({});