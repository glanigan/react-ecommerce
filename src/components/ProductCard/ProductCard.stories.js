import React from 'react';

import { storiesOf } from '@storybook/react';

import {ProductCard} from './ProductCard'


storiesOf('Core Components/Product Card', module)
    .add('Product Card', () => <ProductCard />);
