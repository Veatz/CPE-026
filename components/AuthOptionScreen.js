import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const AuthOptionsScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    // Implement navigation to sign-up screen
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ElecThinker</Text>
      <Pressable style={styles.Loginbutton} onPress={handleLogin}>
        <Text style={styles.LoginbuttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.Signupbutton} onPress={handleSignUp}>
        <Text style={styles.SignupbuttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Loginbutton: {
    width: '100%',
    height: 40,
    borderWidth:1,
    borderColor: '#000',
    backgroundColor: '#0b6623',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  Signupbutton: {
    width: '100%',
    height: 40,
    backgroundColor: '#fae5cf',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#000',
    marginBottom: 10,
  },
  LoginbuttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  SignupbuttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthOptionsScreen;
