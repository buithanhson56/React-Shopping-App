import { useAuth } from '@/provider/AuthProvider';
import { Redirect, router, Stack } from 'expo-router';

export default function AuthLayout() {
    const session = useAuth();
    if (session) {
        router.replace('/');
        // return <Redirect href={"/"} />;
    }
    return <Stack />;
};