import React from 'react';

import SearchBox from './SearchBox'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default {
    title: 'Custom/SearchBox',
    component: SearchBox,
    argTypes: {
        placeholder: {
            name: 'Placeholder Text',                   // Optional: Will set a Label for this control in Storybook, else the arg-name is used
            defaultValue: 'Search...',
            // control: { type: 'text' }
            control: 'text'
        }
    }
}

const Template = ({ placeholder }) => (
    <Box sx={{
        width: "50%",
        height: 300,
        border: '1px dashed grey'
    }}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Demo SearchBox
                </Typography>
                <SearchBox placeholder={placeholder} />
            </Toolbar>
        </AppBar>
    </Box>
)
export const Basic = Template.bind({});
Basic.args = {
    placeholder: "Soek..." // Will override the default value that is set in the argTypes-object
}