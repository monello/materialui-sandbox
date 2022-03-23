// MUI - Styles
import { styled } from "@mui/material/styles"
// MUI - Components
import MuiAppBar from "@mui/material/AppBar"

const drawerWidth = 240

const AppBarStyled = styled(MuiAppBar)(({ theme, open }) => {
    return {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }
})

export default AppBarStyled
