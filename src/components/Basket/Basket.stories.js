import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';

import Basket from './Basket'

storiesOf('Core Components/Basket', module)
    .add('Default', () => (
        <div style={{display:'flex',justifyContent:'flex-end',padding:10,background:'#333'}}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"/>
            <Basket noItems={0}/>
        </div>
    ))