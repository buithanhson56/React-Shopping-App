import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products';
import Button from '@components/Button';



const sizes = ['S', 'M', 'L', 'XL']

const ProductDetailScreen = () => {
    console.log(useLocalSearchParams());
    const { id } = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState('M');
    const product = products.find(x => x.id.toString() == id);
    const addToCart = () => {
        console.warn("add to cart success", selectedSize);
    };

    if (!product)
        return <View>Product not found !</View>
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product?.name }} />
            <Image source={{ uri: product.image || "" }} style={styles.image} />
            <Text>Select size</Text>
            <View style={styles.sizes}>
                {sizes.map(size => (
                    <Pressable
                        onPress={() => {
                            setSelectedSize(size);
                            console.log(setSelectedSize);
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
            <Text style={styles.price}>{product?.price} </Text>
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