import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@components/Button';
import { Colors } from '@constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => {
    const defaultImagePizza = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';
    const { id } = useLocalSearchParams();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const isUpdating = !!id;
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    }
    const resetField = () => {
        setName('');
        setPrice('');
    }
    const validateInput = () => {
        setError('');
        if (!name) {
            setError('Product name is required!');
            return false;
        }
        if (!price) {
            setError('Product price is required!');
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setError('Product price must a number!');
            return false;
        }
        return true;
    }
    const onCreate = () => {
        if (!validateInput()) {
            console.warn(error);
            return;
        };
        //Save in database and blank fields
        console.warn('Create product!');
        resetField();

    }

    const onDelete = () => {
        console.warn("Deleted");
    }

    const confirmDelete = () => {
        Alert.alert("Confirm", "Do you want to delete this product ?", [
            {
                text: 'Cancel',
                style: "cancel"
            },
            {
                text: 'Delete',
                onPress: onDelete,
                style: "destructive"
            }
        ]);
    }
    const onSubmit = () => {
        if (isUpdating) {

        }
        else {
            onCreate();
        }
    }
    return (
        <View style={styles.container} >
            <Stack.Screen options={{ title: isUpdating ? 'Edit Product' : 'Create Product' }} />
            <Image source={{ uri: image || defaultImagePizza }} style={styles.image} />
            <Text onPress={() => pickImage()} style={styles.textButton}>Select image</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input}
                placeholder='Input product name'
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder='9.99'
                keyboardType='numeric'
                value={price}
                onChangeText={setPrice}
            />
            <Text style={styles.error} >{error}</Text>
            <Button text={isUpdating ? "Update" : "Add product"} onPress={() => onSubmit()} />
            {isUpdating && (
                <Text
                    onPress={confirmDelete}
                    style={{
                        color: Colors.light.tint,
                        alignSelf: "center"
                    }}>Delete</Text>)}
        </View>
    )
}
export default CreateProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 7,
        height: 40,
        padding: 10,

    },
    label: {
        fontSize: 15,
        color: 'gray'
    },
    error: {
        color: 'red'
    }
});
