import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../index.css'
import { Icon,iconTypes } from './Icon'

storiesOf('Core Components/Icon', module)
    .add('Icons', () => <Icons />);

const Icons = () =>(
    <React.Fragment>
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