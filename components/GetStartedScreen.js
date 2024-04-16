import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
const GetStartedScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('NextPage');
  };

  return (
      <View style={styles.container}>
      <Text style={styles.title}>ElecThinker</Text>
      <Text style={styles.subtitle}>Making elective choices align with your goals</Text>
      <Pressable style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
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
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#0b6623',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default GetStartedScreen;
