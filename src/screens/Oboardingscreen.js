import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Pop');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/bckgdd.png')}
        style={styles.backgroundImage}>
        <View style={{alignItems: 'center', marginTop: 690}}>
          <TouchableOpacity
            style={styles.continuebtn}
            onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#534BA2',
  },
  continuebtn: {
    width: 335,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  buttonText: {
    color: '#534BA2',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
