//ZURZEIT IRRELEVANT

import React from 'react';
import { StackNavigator } from 'react-navigation';

import appWrapper from '../wrapper/appWrapper'



const mainNavigator = StackNavigator(
    {
      Home: {//Name mit dem zu dem Element navigiert wird
        screen: appWrapper,//als screen Element können screens, modals und weiter Stacks übergeben werden, hier ein screen
      },
    }
)