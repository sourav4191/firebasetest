import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Otp');
  };

  const [phoneFocused, setPhoneFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../images/bckgdd.png')}
          style={styles.backgroundImage}></ImageBackground>
        <View style={styles.bottomHalf}>
          <View style={styles.blueBackground}>
            <Text style={styles.text}>Login</Text>
            <View style={{marginTop: 52}}>
              <Text style={styles.subtitle}>Enter your phone number</Text>
              <View style={{alignItems: 'center'}}>
                <TextInput
                  style={[
                    styles.input,
                    phoneFocused ? {borderColor: '#2891BC'} : null,
                  ]}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  maxLength={10}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => setPhoneFocused(false)}
                />
                <TouchableOpacity
                  style={styles.continuebtn}
                  onPress={handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bottomHalf: {
    flex: 0.7,
    backgroundColor: '#534BA2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  blueBackground: {
    flex: 1,
    margin: 18,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  input: {
    width: 335,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F5F2FB',
    backgroundColor: '#fff',
    marginTop: 28,
  },
  continuebtn: {
    backgroundColor: '#fff',
    width: 335,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#534BA2',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
