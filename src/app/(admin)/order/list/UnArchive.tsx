import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function UnArchive() {
    return (
        <View>
            <Stack.Screen options={{ title: 'ok', headerShown: true }} ></Stack.Screen>

            <Text>UnArchive</Text>
        </View>
    )
}