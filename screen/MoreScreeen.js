import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {constantStyle} from '../assets/ConstantStyle';
export function MoreScreeen({navigation}) {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('AboutUs')}
        style={[
          styles.itemBox,
          styles.shadow,
          {width: width > height ? 400 : width - 50},
        ]}>
        <Text style={[styles.TextBox]}>Abou Us</Text>
        <View style={styles.ArrowIconBox}>
          <Icon style={[styles.ArrowIcon]} name={'arrowright'}></Icon>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 40,
  },
  ArrowIconBox: {
    position: 'absolute',
    right: 10,
    width: 30,
    height: 30,
    backgroundColor: constantStyle.ORANGE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  shadow: {
    shadowColor: constantStyle.GRAY_COLOR,
    shadowOffset: {
      width: -20,
      height: -50,
    },

    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 12,
  },
  TextBox: {
    fontSize: 18,
  },
});
