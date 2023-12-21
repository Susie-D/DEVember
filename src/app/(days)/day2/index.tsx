import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const DaysDetailScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2' }} />
      <Text>Day 2</Text>
    </View>
  );
};

export default DaysDetailScreen;
