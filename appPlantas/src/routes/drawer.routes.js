import {createDrawerNavigator} from '@react-navigation/drawer'
import { Feather} from '@expo/vector-icons';

import Home from '../pages/home'
import Pag01 from '../pages/pag01'
import Pag02 from '../pages/pag02'

const Drawer = createDrawerNavigator();
export default function DrawerRoutes(){
    return(
        <Drawer.Navigator >
            <Drawer.Screen 
            name="Página Inicial"
            component={Home}
            options={{
                drawerIcon: ({color, size}) => <Feather name = "home" color={color} size = {size}/>,
                draweLaberl: 'Início'
            }}
            />
            <Drawer.Screen
            name="pagina 01"
            component={Pag01}
            />
            <Drawer.Screen
            name="pagina 02"
            component={Pag02}
            />
            
        </Drawer.Navigator>
    )
}