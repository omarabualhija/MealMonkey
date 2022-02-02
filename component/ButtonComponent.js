import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';

export function ButtonComponent({
  Content = 'Click Here !',
  ButtonStyle,
  onPress,
  TextColor = '#FFFFFF',
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles._touchableContainer, ButtonStyle]}>
      <Text style={{color: TextColor, fontSize: 20}}>{Content}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  _touchableContainer: {
    backgroundColor: constantStyle.ORANGE_COLOR,
    width: '100%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
