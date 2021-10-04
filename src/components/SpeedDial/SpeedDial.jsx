import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import MuiSpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// Icons
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import GestureTwoToneIcon from '@mui/icons-material/GestureTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import { pink } from '@mui/material/colors';

const actions = [
    { icon: <PersonAddAltTwoToneIcon color="primary" />, name: 'Actors' },
    { icon: <AddLocationAltTwoToneIcon color="error" />, name: 'Locations' },
    { icon: <GestureTwoToneIcon color="success" />, name: 'Storylines' },
    { icon: <LocalOfferTwoToneIcon color="warning" />, name: 'Tags/Keywords' },
    { icon: <AutoStoriesTwoToneIcon sx={{ color: pink[500] }} />, name: 'Summary' },
];

export default function SpeedDialTooltipOpen() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Backdrop open={open} />
            <MuiSpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </MuiSpeedDial>
        </>
    );
}
