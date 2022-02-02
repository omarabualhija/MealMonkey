import React from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';
export function Logo() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/image/Logo.png')} />
      <View style={styles.containerTitle}>
        <View style={styles.title}>
          <Text style={styles.firstWord}>Meal</Text>
          <Text style={styles.secondWord}>Monky</Text>
        </View>
        <Text style={styles.slogenLogo}>Food Delivery</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerTitle: {
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
  },
  firstWord: {
    fontSize: constantStyle.FONT_SIZE_34,
    color: constantStyle.ORANGE_COLOR,
    fontFamily: 'Cabin',
  },
  secondWord: {
    fontSize: constantStyle.FONT_SIZE_34,
  },
  slogenLogo: {
    fontSize: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
});
