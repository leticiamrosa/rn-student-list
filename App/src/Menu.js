import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Logo from "./componentes/Logo";
import If from "./componentes/If";
import Contador from './componentes/Contador';
import { Inverter, Random } from "./componentes/Multi";
import ValidarProps from './componentes/ValidasProps';
import Evento from './componentes/Evento';
import { Avo } from './componentes/ComunicacaoDireta';

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome="Joao" sobrenome="Silva"/>
    },
    Evento: {
        screen: Evento,
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>
    },
    Contador: {
        screen: () => <Contador numeroInicial={10}/>
    },
    Random: {
        screen: () => <Random numeros={8}/>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="React Native" />
    },
    If: {
        screen: () => <If numero={30}/>
    },
    Logo: {
        screen: () => <Logo texto="Logo" />
    }
}, {drawerWidth: 300})