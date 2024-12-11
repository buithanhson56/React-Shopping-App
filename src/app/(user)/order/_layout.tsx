import { Colors } from '@constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';

export default function OrderLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Orders' }} />
        </Stack>);
};