import React from 'react';

import { storiesOf } from '@storybook/react';

import { Icon,iconTypes } from './Icon'

storiesOf('Core Components/Icon', module)
    .add('Icons', () => <Icons />);

const Icons = () =>(
    <React.Fragment>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"/>
        {
            Object.keys(iconTypes)
            .map(iconType => (
                <React.Fragment>
                <Icon type={iconType} margin="10px"/>
                <code>{`<Icon type="${iconType}" margin="10px"/>`}</code>
                </React.Fragment>
            ))
        }
    </React.Fragment>
)