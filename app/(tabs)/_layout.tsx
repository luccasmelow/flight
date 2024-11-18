import React from 'react';
import { Tabs } from 'expo-router';
import { TicketsPlane, Ticket } from 'lucide-react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // headerShown: useClientOnlyValue(false, true),
      }}>
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
