import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

//TODO - Verificar qual tipo de navegação será utilizada no app e instalar, por default aqui está sendo utilizado o stack
const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
