import React from 'react';

import Dialog from './Dialog'
import Button from '@mui/material/Button';

import { addDecorator } from "@storybook/react";

export default {
    title: 'Material-UI/Dialog',
    component: Dialog,
    // decorators: [
    //     (Story) => {
    //         const [open, setOpen] = React.useState(false);
    //         const [scroll, setScroll] = React.useState('paper');
    //         const handleClickOpen = (scrollType) => () => {
    //             setOpen(true);
    //             setScroll(scrollType);
    //         };
    //         const handleClose = () => {
    //             setOpen(false);
    //         };
    //         return (
    //             <>
    //                 <Story open={open} scroll={scroll} handleClose={handleClose} />
    //                 <Button variant="text" onClick={handleClickOpen('paper')}>Open (Scrollabble, Paper)</Button>
    //                 <br />
    //                 <Button variant="text" onClick={handleClickOpen('body')}>Open (Scrollable Body)</Button>
    //             </>
    //         )
    //     },
    // ],
}

// addDecorator(story => <div className="platform">{story()}</div>);

const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Dialog {...args} open={open} scroll={scroll} handleClose={handleClose} />
            <Button variant="text" onClick={handleClickOpen('paper')}>Open (Scrollabble, Paper)</Button>
            <br />
            <Button variant="text" onClick={handleClickOpen('body')}>Open (Scrollable Body)</Button>
        </>
    )
};

export const Basic = Template.bind({});