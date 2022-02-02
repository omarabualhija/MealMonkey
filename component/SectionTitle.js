import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';

export function SectionTitle({title, onPress}) {
  return (
    <View style={styles.SectionBox}>
      <Text style={styles.SectionTitle}>{title}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.ViewAllText}>View All</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  SectionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 35,
  },
  SectionTitle: {
    fontSize: 22,
  },
  ViewAllText: {
    fontSize: 18,
    color: constantStyle.ORANGE_COLOR,
  },
});
