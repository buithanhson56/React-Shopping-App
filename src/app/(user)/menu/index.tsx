import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import ProductListItem from '@components/ProductListItem';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { useProductList } from '@/api/products';

export default function MenuScreen() {

  const { data, error, isLoading } = useProductList();
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
