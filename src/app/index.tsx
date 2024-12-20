import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import Button from '@components/Button'
import { useAuth } from '@/provider/AuthProvider'
import { supabase } from '@/lib/supabase'

const index = () => {
    const { session, loading, profile, isAdmin } = useAuth();
    if (loading) {
        return <ActivityIndicator />;
    }

    if (!session) {
        router.replace('/sign-in');
    }
    if (!isAdmin) {
        router.replace('/(user)');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <Link href={'/(user)'} asChild>
                <Button text="User" />
            </Link>
            <Link href={'/(admin)'} asChild>
                <Button text="Admin" />
            </Link>
            <Link href={'/sign-in'} asChild>
                <Button text="sign-in" />
            </Link>
            <Link href={'/sign-up'} asChild>
                <Button text="sign-up" />
            </Link>
            <Button onPress={() => {
                const error = supabase.auth.signOut();
                if (error)
                    console.warn(error);
                console.warn("Log out success!")
            }} text="log-out" />
        </View>
    )
}
export default index