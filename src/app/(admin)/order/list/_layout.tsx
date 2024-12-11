
import React from 'react'
import { withLayoutContext } from 'expo-router';

import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrderListNavigation() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopTabs />
        </SafeAreaView>

    );
};

const style = StyleSheet.create({
    tabBarOptions: {

    }
})