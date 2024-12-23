import { View, Text, Image, StyleSheet, Pressable, ActivityIndicatorComponent, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@assets/data/products';
import Button from '@components/Button';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@constants/Colors';
import { useProduct } from '@/api/products';


const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const ProductDetailScreen = () => {

    const router = useRouter();
    const { id: idString } = useLocalSearchParams();
    const id = parseFloat(typeof idString == 'string' ? idString : idString[0]);
    const { data, error, isLoading } = useProduct(id);

    if (isLoading) {
        return <ActivityIndicator />
    }
    if (error)
        return <View>Product not found !</View>
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: data?.name,
                    headerRight: () => (
                        <Link href={`/(admin)/menu/create?id=${data.id}`} asChild>
                            <Pressable>
                                <FontAwesome
                                    name="pencil"
                                    size={25}
                                    color={Colors.light.tint}
                                    style={{
                                        marginRight: 15
                                    }}
                                />
                            </Pressable>
                        </Link>
                    )
                }
                }

            />
            <Image source={{ uri: data.image || "" }} style={styles.image} />
            <Text style={styles.title}>{data?.name} </Text>
            <Text style={styles.price}>{data?.price} </Text>
        </View>
    )
}

export default ProductDetailScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',

    },
});