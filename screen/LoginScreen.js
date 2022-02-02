import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {InputComponent} from '../component/InputComponent';
import {ButtonComponent} from '../component/ButtonComponent';
import {constantStyle} from '../assets/ConstantStyle';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function LoginScreen({navigation}) {
  const {height, width} = useWindowDimensions();
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userInfo = useSelector(state => state.UserInfo);
  const [message, setMessage] = useState('');

  const handelLogin = () => {
    if (userInfo.Email !== Email || userInfo.Email === 0) {
      setMessage('Please check your email or password');
    } else if (userInfo.Password !== password) {
      setMessage('Please check your  password');
    } else if (userInfo.Email === Email && userInfo.Password == password) {
      const storeData = async value => {
        try {
          await AsyncStorage.setItem('islogin', Email);
        } catch (e) {
          console.log(e);
        }
      };
      storeData();
      setMessage('');
      setEmail('');
      setPassword('');

      navigation.navigate('BottomNavigation');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.LoginWord}>Login</Text>
      <Text>Add your details to login</Text>
      <View style={styles.containerForm}>
        <InputComponent
          style={styles.itemsForm}
          placeholder={'Your Email !'}
          value={Email}
          onChangeText={setEmail}
          _keyboardType="email-address"
        />
        <InputComponent
          style={styles.itemsForm}
          placeholder={'Password'}
          value={password}
          onChangeText={setPassword}
          _keyboardType="default"
          privettype={true}
        />

        {message.length !== 0 && (
          <View style={styles.Message}>
            <Text>{message}</Text>
          </View>
        )}
        <ButtonComponent
          ButtonStyle={styles.itemsForm}
          Content={'Login'}
          onPress={handelLogin}
        />
        <View style={styles.signUpContainer}>
          <Text>Dont have an Account ?</Text>
          <Pressable
            onPress={() => {
              setMessage('');
              navigation.navigate('SignUp');
            }}
            style={{alignItems: 'center'}}>
            <Text style={styles.SignUpWord}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
  },
  Message: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    fontSize: 16,
    borderColor: constantStyle.ORANGE_COLOR,
  },
  LoginWord: {
    marginBottom: 10,
    fontSize: 30,
  },
  containerForm: {
    width: '90%',
    marginVertical: 50,
    alignItems: 'center',
  },
  itemsForm: {
    marginBottom: 30,
    width: '90%',
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  SignUpWord: {
    color: constantStyle.ORANGE_COLOR,
  },
});
