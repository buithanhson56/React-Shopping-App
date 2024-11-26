import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
    console.log(useLocalSearchParams());
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{ title: 'Detail' }} />
            <Text>product {id} </Text>
        </View>
    )
}

export default ProductDetailScreen