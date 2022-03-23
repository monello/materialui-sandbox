import React from 'react';

import App from './App'

export default {
    title: 'App/App',
    component: App,
    argTypes: {
        maxWidth: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', false, 'string'],
            control: { type: 'select' }
        }
    }
}

const Template = (args) => <App {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    maxWidth: 'xl',
    disableGutters: false
}