import React from 'react';
import {
  ImageBackground,
  useWindowDimensions,
  View,
  StyleSheet,
} from 'react-native';
import {Logo} from '../component/Logo';
export function WelcomeScreen() {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        width: width,
        height: height,
      }}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../assets/image/WelcomeBackGround.png')}
        style={styles.background}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffbf',
    zIndex: 999,
  },
});
