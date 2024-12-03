import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@assets/data/products';
import Button from '@components/Button';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';


const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const ProductDetailScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
    const product = products.find(x => x.id.toString() == id);
    const { addItems } = useCart();
    const addToCart = () => {
        if (!product)
            return;
        addItems(product, selectedSize);
        router.push('/cart');
    };

    if (!product)
        return <View>Product not found !</View>
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product?.name }} />
            <Image source={{ uri: product.image || "" }} style={styles.image} />
            <Text style={styles.title}>{product?.name} </Text>
            <Text style={styles.price}>{product?.price} </Text>
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