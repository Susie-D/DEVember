import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'lightblue' },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'DEVember' }} />
    </Stack>
  );
}
