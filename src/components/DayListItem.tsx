import { Text, View, StyleSheet } from 'react-native';

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9EDE3',
    width: 200,
    height: 200,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9B4521',
    borderRadius: 20,
  },
  text: {
    fontSize: 70,
    color: '#9B4521',
    fontFamily: 'AmaticBold',
  },
});
