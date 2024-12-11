//import { Stack, withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";


export default function MenuStack() {
    return (
        <Stack>
            <Stack.Screen name="list" options={{ headerShown: false }} ></Stack.Screen>
        </Stack>
    );
}

