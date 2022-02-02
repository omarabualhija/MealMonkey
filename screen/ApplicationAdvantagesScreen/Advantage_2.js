import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../component/ButtonComponent';
import {constantStyle} from '../../assets/ConstantStyle';

export function Advantage_2({navigation}) {
  const goTo = () => {
    navigation.navigate('AdvantageThree');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={[styles.Img, styles.marginBottom]}
        source={require('../../assets/image/Adv2.png')}
      />
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.marginBottom]}></View>
        <View
          style={[styles.dot, styles.marginBottom, , styles.activeDot]}></View>
        <View style={[styles.dot, styles.marginBottom]}></View>
      </View>
      <Text style={[styles.title, styles.marginBottom]}>Fast Delivery </Text>
      <Text style={[styles.paragraph, styles.marginBottom]}>
        Fast food delivery to your home, office wherever you are
      </Text>
      <ButtonComponent
        onPress={goTo}
        Content={'Next'}
        ButtonStyle={{width: '70%'}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: constantStyle.GRAY_COLOR,
    marginLeft: 10,
    borderRadius: 20,
  },
  activeDot: {
    backgroundColor: constantStyle.ORANGE_COLOR,
  },
  title: {
    fontSize: 34,
    color: constantStyle.GRAY_COLOR,
  },
  paragraph: {
    color: constantStyle.GRAY_COLOR,
    lineHeight: 20,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  marginBottom: {
    marginBottom: 25,
  },
  Img: {
    width: 250,
    height: 300,
  },
});
