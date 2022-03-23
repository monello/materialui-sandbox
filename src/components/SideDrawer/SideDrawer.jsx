import * as React from "react"

// MUI - Styling
import { useTheme } from "@mui/material/styles"
// MUI - Components
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
// MUI - Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
// Styled Components
import Drawer from "./Drawer.styled"
import DrawerHeader from "./DrawerHeader.styled"

export default function SideDrawer(props) {
    const { drawerIsOpen, handleDrawerClose } = props

    const theme = useTheme()

    return (
        <Drawer variant="permanent" open={drawerIsOpen}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {["Inbox", "Starred", "Send email"].map((text, index) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: drawerIsOpen ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: drawerIsOpen ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                            primary={text}
                            sx={{ opacity: drawerIsOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: drawerIsOpen ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: drawerIsOpen ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                            primary={text}
                            sx={{ opacity: drawerIsOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    )
}
