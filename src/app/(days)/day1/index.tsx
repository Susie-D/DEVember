import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const DaysDetailScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <Text>DaysDetailScreen</Text>
    </View>
  );
};

export default DaysDetailScreen;
