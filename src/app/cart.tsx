import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { Component, useState } from 'react'
import { useCart } from '@/provider/CartProvider';
import CartListItem from '@components/CartListItem';
import Button from '@components/Button';
import ModalScreen from './modal';
import CustomModal from './modal';


const CartScreen = () => {
    const { items, total } = useCart();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                contentContainerStyle={{ gap: 10 }}
            />
            <Text style={styles.totalPrice}>Total price : {total}</Text>
            <Button text="Check out" onPress={() => setModalVisible(true)} />


        </View>
    );
}
export default CartScreen;
const styles = StyleSheet.create({
    totalPrice: {

    }
})