import { Colors } from '@constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';

export default function MenuLayout() {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <Link href="/(admin)/menu/create" asChild>
                        <FontAwesome
                            name="plus-square-o"
                            size={25}
                            color={Colors.light.tint}
                            style={{ marginRight: 15, opacity: 1 }}
                        />
                    </Link>
                )
            }}>
            <Stack.Screen name='[id]' options={{
                title: 'Detail',
                headerRight: () => (
                    <Link href="/" asChild>
                        <FontAwesome
                            name="pencil-square-o"
                            size={25}
                            color={Colors.light.tint}
                            style={{ marginRight: 15, opacity: 1 }}
                        />
                    </Link>
                )

            }} />
            <Stack.Screen name='index' options={{ title: 'Menu' }} />
        </Stack>);
};