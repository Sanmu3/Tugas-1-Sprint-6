import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from './screen1';
import Screen11 from './screen11';
import Home from './home';
import Screen2 from './screen2';
import Pindah from './Status';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Top = createMaterialTopTabNavigator();

const Dorawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const TopTab = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Profile" component={Pindah} />
      <Top.Screen name="Status" component={Pindah} />
      <Top.Screen name="Setting" component={Pindah} />
    </Top.Navigator>
  );
};

const Stuck = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Dorawer}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Pindah" component={TopTab} />
      <Stack.Screen
        name="Screen11"
        component={Screen11}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Stuck} />
        <Tab.Screen name="Status Pengiriman" component={Screen1} />
        <Tab.Screen name="Ending" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
