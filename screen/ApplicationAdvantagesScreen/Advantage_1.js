import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../component/ButtonComponent';
import {constantStyle} from '../../assets/ConstantStyle';

export function Advantage_1({navigation}) {
  const goTo = () => {
    navigation.navigate('AdvantageTwo');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={[styles.Img, styles.marginBottom]}
        source={require('../../assets/image/Adv1.png')}
      />
      <View style={styles.dotsContainer}>
        <View
          style={[styles.dot, styles.marginBottom, styles.activeDot]}></View>
        <View style={[styles.dot, styles.marginBottom]}></View>
        <View style={[styles.dot, styles.marginBottom]}></View>
      </View>
      <Text style={[styles.title, styles.marginBottom]}>
        Find Food You Love
      </Text>
      <Text style={[styles.paragraph, styles.marginBottom]}>
        Discover the best foods from over 1,000 restaurants and fast delivery to
        your doorstep
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
  Img: {
    width: 250,
    height: 300,
  },
  marginBottom: {
    marginBottom: 25,
  },
});
