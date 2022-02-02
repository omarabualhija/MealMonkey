import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';

export function InputComponent({
  placeholder = 'Add Here !',
  onChangeText,
  style,
  value,
  _keyboardType = 'default',
  privettype = false,
  editable = true,
}) {
  const setValue = e => {
    onChangeText(e);
  };
  return (
    <TextInput
      editable={editable}
      style={[styles.inputStyle, style]}
      placeholder={placeholder}
      placeholderTextColor={constantStyle.GRAY_COLOR}
      autoCorrect={false}
      onChangeText={setValue}
      value={value}
      keyboardType={_keyboardType}
      secureTextEntry={privettype}
    />
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: constantStyle.LIGHT_GRAY_COLOR,
    paddingHorizontal: 25,
    borderRadius: 50,
    width: '100%',
  },
});
