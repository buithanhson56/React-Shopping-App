import { router, Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@components/navigation/TabBarIcon';
import { useColorScheme } from '@hooks/useColorScheme';
import { Colors } from '@constants/Colors';
import { useAuth } from '@/provider/AuthProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isAdmin = useAuth();

  if (!isAdmin) {
    router.replace('/');
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light.tint
        }
      }}>
      <Tabs.Screen name="menu" options={{
        href: null,
      }} />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
