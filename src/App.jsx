import * as React from "react"

// MUI - Material
import { CssBaseline, Box, Container } from "@mui/material"

// MUI - Components
import AppBar from "./components/AppBar/AppBar"
import SideDrawer from "./components/SideDrawer/SideDrawer"

// Utils
import ToolbarSpacer from "./utils/ToolbarSpacer"
import { LoremIpsum } from "react-lorem-ipsum"

function App() {
    const [drawerIsOpen, setDrawerOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        console.log("handleDrawerOpen() - 07:26")
        setDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        console.log("handleDrawerClose() - 07:26")
        setDrawerOpen(false)
    }

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                drawerIsOpen={drawerIsOpen}
                handleDrawerOpen={handleDrawerOpen}
            />
            <SideDrawer
                drawerIsOpen={drawerIsOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Container>
                    <ToolbarSpacer />
                    <LoremIpsum
                        p={6}
                        avgWordsPerSentence={10}
                        avgSentencesPerParagraph={10}
                    />
                </Container>
            </Box>
        </Box>
    )
}

export default App
