import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';
import {InputComponent} from './../component/InputComponent';
import {useSelector} from 'react-redux';
export function ProfileScreen() {
  const info = useSelector(state => state.UserInfo);
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.imgndNameBox}>
          <Image
            source={require('../assets/image/PortraitPlaceholder.png')}
            style={styles.personImg}></Image>
          <Text style={styles.NameText}>{info.name}</Text>
          <Pressable>
            <Text style={styles.SingOutText}>Sign Out</Text>
          </Pressable>
          <View
            style={[
              styles.InputsBox,
              {width: width > height ? 400 : width - 25},
            ]}>
            <View style={styles.InputBox}>
              <Text style={styles.labelInput}>Name</Text>
              <InputComponent
                value={info.name}
                style={styles.input}></InputComponent>
            </View>
            <View style={styles.InputBox}>
              <Text style={styles.labelInput}>Email</Text>
              <InputComponent
                value={info.Email}
                style={styles.input}></InputComponent>
            </View>
            <View style={styles.InputBox}>
              <Text style={styles.labelInput}>Mobile No</Text>
              <InputComponent
                value={info.MobileNo}
                style={styles.input}></InputComponent>
            </View>
            <View style={styles.InputBox}>
              <Text style={styles.labelInput}>Address</Text>
              <InputComponent
                value={info.Address}
                style={styles.input}></InputComponent>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
// placeholder = 'Add Here !',
// onChangeText,
// style,
// value,
// _keyboardType,
// editable = false,
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 120,
  },
  personImg: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  imgndNameBox: {
    alignItems: 'center',
  },
  NameText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },
  SingOutText: {
    color: constantStyle.ORANGE_COLOR,
  },
  input: {
    fontSize: 20,
    color: constantStyle.DARK_GRAY_COLOR,
    backgroundColor: 'transparent',
  },
  InputBox: {
    width: '100%',
    backgroundColor: constantStyle.LIGHT_GRAY_COLOR,
    paddingHorizontal: 10,
    marginTop: 15,

    borderRadius: 50,
  },
  labelInput: {
    marginLeft: 25,
    marginTop: 10,
  },
  InputsBox: {
    marginTop: 25,
  },
});
