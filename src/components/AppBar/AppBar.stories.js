import React from 'react';

import AppBar from './AppBar'
import MuiToolbar from "@mui/material/Toolbar";

import { LoremIpsum } from "react-lorem-ipsum";

export default {
    title: 'Material-UI/AppBar',
    component: AppBar,
    decorators: [
        (Story) => (
            <>
                <Story />
                <MuiToolbar />
                <LoremIpsum
                    p={6}
                    avgWordsPerSentence={10}
                    avgSentencesPerParagraph={10}
                />
            </>
        ),
    ],
}

const Template = (args) => <AppBar {...args} />;

export const Basic = Template.bind({});