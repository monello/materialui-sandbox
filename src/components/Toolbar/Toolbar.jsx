import * as React from "react"
// MUI - Components
import MuiToolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import IconButton from "@mui/material/IconButton"
// MUI - Icons
import AccountCircle from "@mui/icons-material/AccountCircle"
import MenuIcon from "@mui/icons-material/Menu"
import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MoreIcon from "@mui/icons-material/MoreVert"
// Custom Components
import SearchBox from "../SearchBox/SearchBox"

export default function Toolbar(props) {
    // Destructure the props
    const {
        menuId,
        mobileMenuId,
        drawerIsOpen,
        handleMobileMenuOpen,
        handleProfileMenuOpen,
        handleDrawerOpen,
        variant,
    } = props

    return (
        <MuiToolbar variant={variant}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{
                    marginRight: 5,
                    ...(drawerIsOpen && { display: "none" }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
            >
                MUI
            </Typography>
            <SearchBox />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>
        </MuiToolbar>
    )
}
