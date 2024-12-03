import { Colors } from '@constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';

export default function MenuLayout() {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <Link href="/cart" asChild>
                        <FontAwesome
                            name="shopping-cart"
                            size={25}
                            color={Colors.light.tint}
                            style={{ marginRight: 15, opacity: 1 }}
                        />
                    </Link>
                )
            }}>
            <Stack.Screen name='index' options={{ title: 'Menu' }} />
        </Stack>);
};