import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Memberships from '../screens/Memberships';
import Account from '../screens/Account';
import Images from '../assets/images';
import NavIcon from '../components/navigation/NavIcon';
import { Colors, Spaces } from '../assets/themes';
import { moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

const DefaultOptionsTab = {
  tabBarShowLabel: false,
};

const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.grey_06,
        tabBarStyle: styles.tabBarStyle,
      }}
      sceneContainerStyle={{ backgroundColor: Colors.primary }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          ...DefaultOptionsTab,
          tabBarIcon: ({ color }) => (
            <NavIcon source={Images.ic_home} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          ...DefaultOptionsTab,
          tabBarIcon: ({ color }) => (
            <NavIcon source={Images.ic_notification} color={color} />
          ),
          tabBarBadge: '1',
          tabBarBadgeStyle: styles.tabBarBadgeStyleCheat,
        }}
      />
      <Tab.Screen
        name="Memberships"
        component={Memberships}
        options={{
          ...DefaultOptionsTab,
          tabBarIcon: ({ color }) => (
            <NavIcon source={Images.ic_membership} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          ...DefaultOptionsTab,
          tabBarIcon: ({ color }) => (
            <NavIcon source={Images.ic_account} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: moderateScale(96),
    paddingTop: Spaces.xl,
    borderTopWidth: moderateScale(2),
    borderTopColor: Colors.grey_07,
  },
  tabBarBadgeStyleCheat: {
    borderRadius: moderateScale(6),
    maxWidth: moderateScale(12),
    maxHeight: moderateScale(12),
    lineHeight: moderateScale(12),
    fontSize: moderateScale(12),
    color: Colors.red_notification,
    backgroundColor: Colors.red_notification,
  },
});

export default RootNavigation;
