import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';
import '../../index.css'
import Basket from './Basket'

storiesOf('Core Components/Basket', module)
    .add('Default', () => (
        <div style={{display:'flex',justifyContent:'flex-end',padding:10,background:'#333'}}>
            <Basket noItems={0}/>
        </div>
    ))