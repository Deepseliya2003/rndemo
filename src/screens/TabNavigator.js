import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Profile from './Profile';
import Events from './Events';
import Favourites from './Favourites';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon Library

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' }, // Customize tab bar color
        tabBarActiveTintColor: '#ff6347', // Active tab color
        tabBarInactiveTintColor: '#808080', // Inactive tab color
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Events') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Favourites') {
            iconName = 'heart-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
