import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PopupScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../images/bckgdd.png')}
          style={styles.backgroundImage}></ImageBackground>
        <View style={styles.bottomHalf}>
          <View style={styles.blueBackground}>
            <Text style={styles.text}>Admin Login</Text>
            <View style={{marginTop: 52}}>
              <Text style={styles.text1}>
                Accept cleaning requests from the
              </Text>
              <Text style={styles.text1}>users and take the employee</Text>
              <Text style={styles.text1}>attendance at your fingertips</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={{marginLeft: 290, marginBottom: 8}}
                onPress={handleNext}>
                <Text style={styles.nextbuttonText}>Next</Text>
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
    alignItems: 'center',
    marginTop: 18,
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
  nextbuttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PopupScreen;
