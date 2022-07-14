import React from 'react';
import  { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigation from './TabNavigation';
import Profile from '../Screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="More" component={TabNavigation}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;