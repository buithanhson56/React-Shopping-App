// import { View, Text, FlatList } from 'react-native'
// import React from 'react'
// import { Stack, useLocalSearchParams } from 'expo-router'
// import orders from '@assets/data/orders';
// import OrderItemListItem from '@components/OrderItemListItem';
// import OrderListItem from '@components/OrderItemList';


// export default function OrderDetailScreen() {
//     const { id } = useLocalSearchParams();
//     const order = orders.find(x => x.id.toString() == id);

//     return (
//         <View style={{ padding: 10, gap: 10 }}>
//             <Stack.Screen options={{ title: `Order detail #${id}` }} />
//             <OrderListItem order={order} />
//             <FlatList data={order?.order_items} renderItem={({ item }) => <OrderItemListItem item={item} />} />
//         </View>
//     )
// }