import React from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {ButtonComponent} from '../../component/ButtonComponent';
import {constantStyle} from '../../assets/ConstantStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Advantage_3({navigation}) {
  const {width, height} = useWindowDimensions();

  const goTO = () => {
    const storeData = async value => {
      try {
        await AsyncStorage.setItem('IsNewDownload', 'done');
      } catch (e) {
        console.log(e);
      }
    };
    storeData();
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          resizeMode="stretch"
          style={[styles.Img, styles.marginBottom]}
          source={require('../../assets/image/Adv3.png')}
        />
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.marginBottom]}></View>
          <View style={[styles.dot, styles.marginBottom]}></View>
          <View
            style={[styles.dot, styles.marginBottom, styles.activeDot]}></View>
        </View>
        <Text style={[styles.title, styles.marginBottom]}>Live Tracking</Text>
        <Text style={[styles.paragraph, styles.marginBottom]}>
          Real time tracking of your food on the app once you placed the order
        </Text>
        <View style={{width: width > height ? 300 : '100%'}}>
          <ButtonComponent
            onPress={goTO}
            Content={'Next'}
            ButtonStyle={{width: '70%'}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
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
