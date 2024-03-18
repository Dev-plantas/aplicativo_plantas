import {NavigationContainer} from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';

//Implementação das rotas
export default function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}