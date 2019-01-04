import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Listing from './Listing/Listing'
import {routes} from '../consts/routes'
import Appbar from '../components/Appbar/Appbar'

const Pages = () =>(
    <>
    <Appbar/>
    <div style={{margin:'80px 20px 20px'}}>
    <Switch>
        <Route path={routes.LISTING.path} component={Listing}/>
    </Switch>
    </div>
    </>
)
export default Pages