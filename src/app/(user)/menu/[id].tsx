import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import Button from '@components/Button';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';
import { useProduct } from '@/api/products';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const ProductDetailScreen = () => {
    const router = useRouter();
    const { id: idString } = useLocalSearchParams();

    const id = parseFloat(typeof idString == 'string' ? idString : idString[0])
    const { data, error, isLoading } = useProduct(id);
    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const { addItems } = useCart();
    const addToCart = () => {
        if (!data)
            return;
        addItems(data, selectedSize);
        router.push('/cart');
    };
    if (isLoading)
        return <ActivityIndicator />
    if (error)
        return <View>Product not found !</View>
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: data?.name }} />
            <Image source={{ uri: data.image || "" }} style={styles.image} />
            <Text>Select size</Text>
            <View style={styles.sizes}>
                {sizes.map(size => (
                    <Pressable
                        onPress={() => {
                            setSelectedSize(size);
                        }}
                        key={size}
                        style={[styles.size, {
                            backgroundColor: selectedSize == size ? "gainsboro" : "white"
                        }]}>
                        <Text
                            style={[styles.sizeText, {
                                color: selectedSize == size ? "black" : "gray"
                            }]}> {size}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <Text style={styles.price}>{data?.price} </Text>
            <Button onPress={addToCart} text='Add to cart' />
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
    image: {
        width: '100%',
        aspectRatio: 1
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 'auto',
    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    size: {
        backgroundColor: 'gainsboro',
        width: 50,
        borderRadius: 20,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sizeText: {
        fontSize: 18,
        fontWeight: '500',

    }
});