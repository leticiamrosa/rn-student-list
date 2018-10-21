import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Logo from "./componentes/Logo";
import { general } from "./styles/styles";
import If from "./componentes/If";
import { Inverter, Random } from "./componentes/Multi";

export default createDrawerNavigator({
    Random: {
        screen: () => <Random numeros={8}/>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter text='react native'/>
    },
    If: {
        screen: () => <If numero={30}/>
    },
    Logo: {
        screen: () => <Simples texto="React Native"/>
    }
}, {drawerWidth: 300})