import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';
import {Logo} from '../component/Logo';
import {ButtonComponent} from '../component/ButtonComponent';

export function StartScreen() {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{width: width, height: height, backgroundColor: '#FFFFFF'}}>
      <View style={styles.orangeView}>
        <Image
          style={[styles.ImagePople, {width: width, height: height / 2}]}
          source={require('../assets/image/OrangeBackGround.png')}
        />
        <View style={styles.logoView}>
          <Logo />
        </View>
      </View>

      <View>
        <Text style={styles.text}>
          Discover the best foods from over 1,000 restaurants and fast delivery
          to your doorstep
        </Text>
      </View>
      <View>
        <ButtonComponent
          onPress={() => console.log('ss')}
          Content={'Login'}
          ButtonStyle={{marginTop: 40, width: width / 1.5}}
        />
        <ButtonComponent
          onPress={() => console.log('ss')}
          Content={'Create an Account'}
          TextColor={constantStyle.ORANGE_COLOR}
          ButtonStyle={{
            marginTop: 15,
            width: width / 1.5,
            backgroundColor: '#FFFFFF',
            borderColor: constantStyle.ORANGE_COLOR,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orangeView: {
    backgroundColor: constantStyle.ORANGE_COLOR,
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 100,
  },
  ImagePople: {
    width: '100%',
    height: '100%',
  },
  logoView: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 100,
    position: 'absolute',
    width: 190,
    height: 200,
    bottom: -100,
    alignSelf: 'center',
  },
  text: {
    marginTop: 20,
    paddingHorizontal: 50,
    lineHeight: 20,
    textAlign: 'center',
  },
});
