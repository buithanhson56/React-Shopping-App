import { Colors } from '../constants/Colors';
import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container} >
                <Image source={{ uri: product.image ?? "" }}
                    style={styles.image}
                    resizeMode="contain"
                >
                </Image>
                <Text style={styles.title}> {product.name}</Text>
                <Text style={styles.price}> {product.price}</Text>
            </Pressable>
        </Link >
    );
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '50%'
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        color: Colors.light.tint,
        fontSize: 18,
        fontWeight: 'bold',
    }
});
