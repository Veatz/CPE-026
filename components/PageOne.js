import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import bgImage from 'C:/Users/Centz/Desktop/CPE 026 - Emerging Technologies 3 in CpE/PrelimExam/assets/BgImage.png';

const NextPage = ({ navigation }) => {
  const handleYesPress = () => {

  };

  const handleNoPress = () => {
  };

  return (
    <ImageBackground source = {bgImage} resizeMode='cover' style = {styles.bgimage}>
      <View style={styles.container}>
      <Text style={styles.questionText}>
        Are you interested in learning about the integration of computer systems with physical processes?
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleYesPress}>
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleNoPress}>
          <Text style={styles.buttonText}>No</Text>
        </Pressable>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '45%',
    height: 40,
    backgroundColor: '#ab0e0e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bgimage:{
    flex: 1,
    justifyContent: 'center',
  }
});

export default NextPage;