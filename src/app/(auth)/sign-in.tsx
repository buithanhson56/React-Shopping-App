import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Button from '@components/Button';

import { Link, Stack } from 'expo-router';
import { Colors } from '@constants/Colors';
import Checkbox from 'expo-checkbox';
import { supabase } from '@/lib/supabase';
const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error)
            Alert.alert(error.message);
        console.warn("Sign in success");
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Sign in' }} />

            <Text style={styles.label}>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="jon@gmail.com"
                style={styles.input}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder=""
                style={styles.input}
                secureTextEntry={!isPasswordVisible}
            />
            <View style={styles.checkboxContainer} >
                <Checkbox
                    value={isPasswordVisible}
                    onValueChange={setIsPasswordVisible}
                >
                </Checkbox>
                <Text style={styles.checkboxLabel}>Show/hide password</Text>
            </View>
            <Button disabled={loading} onPress={signInWithEmail} text={loading ? "Is logging ..." : "Sign in"} />
            <Link href="/sign-up" style={styles.textButton}>
                Create an account
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    checkboxLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        marginStart: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    checkbox: {

    },
    container: {
        padding: 20,
        justifyContent: 'center',
        flex: 1,
    },
    label: {
        color: 'gray',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    },
});

export default SignInScreen;