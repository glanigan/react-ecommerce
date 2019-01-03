import React from 'react';

import { storiesOf } from '@storybook/react';

import { AppbarContainer as Appbar} from './Appbar'

storiesOf('Core Components/Appbar', module)
    .add('Appbar Container', () => <Appbar />);
