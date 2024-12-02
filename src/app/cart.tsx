import { Text, View, FlatList } from 'react-native'
import React, { Component, useState } from 'react'
import { useCart } from '@/provider/CartProvider';
import CartListItem from '@components/CartListItem';
import Button from '@components/Button';
import ModalScreen from './modal';
import CustomModal from './modal';


const CartScreen = () => {
    const { items } = useCart();
    const [modalVisible, setModalVisible] = useState(false);
    console.log(items);
    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                contentContainerStyle={{ padding: 10, gap: 10 }}
            />
            <Button text="Open Modal" onPress={() => setModalVisible(true)} />

            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title="Welcome"
            >
                <Text>This is a reusable modal component.</Text>
            </CustomModal>

        </View>
    );
}
export default CartScreen;