import React from 'react';

import AppBar from './AppBar'
import ToolbarSpacer from '../../utils/ToolbarSpacer';

import { LoremIpsum } from "react-lorem-ipsum";

export default {
    title: 'Material-UI/AppBar',
    component: AppBar,
    decorators: [
        (Story) => (
            <>
                <Story />
                <ToolbarSpacer />
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