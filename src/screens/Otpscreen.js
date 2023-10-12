import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

const Otpscreen = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const otpInputRefs = useRef([]);

  const handleOTPInputChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);

    if (value && index < otpInputRefs.current.length - 1) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../images/bckgdd.png')}
          style={styles.backgroundImage}></ImageBackground>
        <View style={styles.bottomHalf}>
          <View style={styles.blueBackground}>
            <View style={styles.header}>
              <Text style={styles.title}>Enter Verification Code</Text>
              <Text style={styles.subtitle1}>
                We have senyt you a 6 digit Verification on
              </Text>
              <Text style={styles.subtitle1}>94xxxxxx41</Text>

              <View style={styles.otpContainer}>
                {otpValues.map((value, index) => (
                  <TextInput
                    key={index}
                    ref={ref => (otpInputRefs.current[index] = ref)}
                    style={[
                      styles.otpInput,
                      {
                        backgroundColor: value ? '#2891BC' : '#534BA2',
                        color: value ? '#FFFFFF' : '#000000',
                      },
                    ]}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text => handleOTPInputChange(index, text)}
                    value={value}
                    onSubmitEditing={() => {
                      if (index === otpInputRefs.current.length - 1 && value) {
                        Keyboard.dismiss();
                      }
                    }}
                  />
                ))}
              </View>
            </View>
            <View style={styles.btnview}>
              <TouchableOpacity style={styles.continuebtn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle1: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2891BC',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  btnview: {
    alignItems: 'center',
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
  header: {
    margin: 22,
  },
});

export default Otpscreen;
