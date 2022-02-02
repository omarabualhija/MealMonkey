import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
import {InputComponent} from '../component/InputComponent';
import {ButtonComponent} from '../component/ButtonComponent';
import {constantStyle} from '../assets/ConstantStyle';
import {useDispatch} from 'react-redux';
import {SignUpAction} from '../redux/Actions/userAction';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export function SignUPScreen({navigation}) {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [doneSignUp, setDoneSignUp] = useState(false);
  const signUpHandel = () => {
    if (
      !name ||
      !Email ||
      !MobileNo ||
      !Address ||
      !Password ||
      !ConfirmPassword
    ) {
      setMessage('All Fields Are Required !');
    } else if (!name.search('@')) {
      setMessage('Set a Valid Email');
    } else if (Password !== ConfirmPassword) {
      setMessage('Password and confirm password do not match');
    } else if (Password.length < 8) {
      setMessage('Password length must be 8 or more');
    } else if (Password.length > 50) {
      setMessage('too long Password');
    } else if (Password.search(/\d/) == -1) {
      setMessage('The password must contain numbers');
    } else if (Password.search(/[a-zA-Z]/) == -1) {
      setMessage('Password must contain uppercase and lowercase letters');
    } else if (Password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
      setMessage('The password must contain a symbol');
    } else {
      const userInfo = {
        name,
        Email,
        MobileNo,
        Address,
        Password,
        ConfirmPassword,
      };
      dispatch(SignUpAction(userInfo));
      setDoneSignUp(true);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.LoginWord}>Sign Up</Text>
        <Text>Add your details to sign up</Text>
        <View style={styles.containerForm}>
          <InputComponent
            style={styles.itemsForm}
            placeholder={'Name'}
            value={name}
            onChangeText={setName}
            _keyboardType="default"
          />

          <InputComponent
            style={styles.itemsForm}
            placeholder={'Email'}
            value={Email}
            onChangeText={setEmail}
            _keyboardType="email-address"
          />

          <InputComponent
            style={styles.itemsForm}
            placeholder={'Mobile No .'}
            value={MobileNo}
            onChangeText={setMobileNo}
            _keyboardType="phone-pad"
          />

          <InputComponent
            style={styles.itemsForm}
            placeholder={'Address'}
            value={Address}
            onChangeText={setAddress}
            _keyboardType="default"
          />
          <InputComponent
            style={styles.itemsForm}
            placeholder={'Password'}
            value={Password}
            onChangeText={setPassword}
            _keyboardType="default"
            privettype={true}
          />

          <InputComponent
            style={styles.itemsForm}
            placeholder={'Confirm Password'}
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
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
            Content={'Sign Up'}
            onPress={signUpHandel}
          />
          <View style={styles.signUpContainer}>
            <Text>Already have an Account? </Text>
            <Pressable
              onPress={() => navigation.navigate('Login')}
              style={{alignItems: 'center'}}>
              <Text style={styles.SignUpWord}> Login</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {doneSignUp && (
        <View
          style={[styles.MainGoToSignInBox, {width: width, height: height}]}>
          <View style={styles.GoToSignInBox}>
            <Pressable
              onPress={() => setDoneSignUp(false)}
              style={styles.CloseButton}>
              <Icon color={'#FFFFFF'} size={30} name="closecircleo"></Icon>
            </Pressable>
            <LottieView
              style={styles.doneAnimation}
              source={require('../assets/done.json')}
              autoPlay
              loop
            />
            <View style={styles.GoTOLoginBtnBox}>
              <ButtonComponent
                onPress={() => navigation.navigate('Login')}
                ButtonStyle={styles.itemsForm}
                Content={'Go Back To Login'}
              />
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  LoginWord: {
    marginBottom: 10,
    fontSize: 30,
  },
  containerForm: {
    width: '90%',
    marginVertical: 30,
    alignItems: 'center',
  },
  itemsForm: {
    marginBottom: 20,
    width: '90%',
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  SignUpWord: {
    color: constantStyle.ORANGE_COLOR,
  },
  Message: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    fontSize: 16,
    borderColor: constantStyle.ORANGE_COLOR,
  },
  MainGoToSignInBox: {
    position: 'absolute',

    backgroundColor: constantStyle.GRAY_COLOR,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GoToSignInBox: {
    backgroundColor: constantStyle.ORANGE_COLOR,
    width: 350,
    height: 250,
    borderBottomRightRadius: 80,
    borderTopLeftRadius: 80,
    alignItems: 'center',
  },

  doneAnimation: {
    width: 150,
  },
  GoTOLoginBtnBox: {
    width: 250,
  },
  CloseButton: {
    position: 'absolute',
    right: 0,
  },
});
