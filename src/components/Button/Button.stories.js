import React from 'react';

import Button from './Button'

export default {
    title: 'MUI/Button',
    component: Button
}

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: 'Button Label'
}