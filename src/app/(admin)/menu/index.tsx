import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import ProductListItem from '@components/ProductListItem';
import { useProductList } from '@/api/products';

export default function MenuScreen() {

  const { data, isLoading, error } = useProductList();
  if (error) {
    return <Text>Fail to fetch products!</Text>
  }
  if (isLoading) {
    return <ActivityIndicator />
  }


  return (
    <View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <ProductListItem product={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({

// });
