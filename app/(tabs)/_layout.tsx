import React from 'react';
import { Tabs } from 'expo-router';
import { TicketsPlane, ScanSearch } from 'lucide-react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false
      }}>

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <ScanSearch size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Ticket',
          tabBarIcon: ({ color }) => <TicketsPlane size={22} color={color} />,
        }}
      />

     
    </Tabs>
  );
}
