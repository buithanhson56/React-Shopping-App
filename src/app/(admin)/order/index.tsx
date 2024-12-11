import { OrderItem } from '@/types';
import orders from '@assets/data/orders';
import OrderItemList from '@components/OrderItemList';
import { Stack } from 'expo-router';
import { View, FlatList, Text } from 'react-native';


export default function OrderScreen() {
  <Stack.Screen options={{ title: 'order admin screen' }} />
  return (< FlatList data={orders}
    renderItem={({ item }) => <OrderItemList order={item} />
    }
  />
  );
}

// const styles = StyleSheet.create({

// });
