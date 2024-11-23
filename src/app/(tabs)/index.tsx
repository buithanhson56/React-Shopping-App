import { Image, StyleSheet, View, Text } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[5]} />
      <ProductListItem product={products[6]} />
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
    width: '80%',
    aspectRatio: 1,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
