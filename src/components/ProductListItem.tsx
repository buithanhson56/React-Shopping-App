import { Colors } from '@/src/constants/Colors';
import { Image, StyleSheet, View, Text } from 'react-native';

const ProductListItem = ({ product }) => {
    console.log(product);
    return (<View >
        <Image source={{ uri: product.image }} style={styles.image} ></Image>
        <Text style={styles.title}> {product.name}</Text>
        <Text style={styles.price}> {product.price}</Text>
    </View>);
}

export default ProductListItem

const styles = StyleSheet.create({
    image: {
        width: '80%',
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
