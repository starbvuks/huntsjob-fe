import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const App = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <Image
        source={require("../../assets/huntsjob-logo.png")}
        style={styles.logo}
    />
    <View style={styles.headerBox}>

      <Text style={styles.title}>
        Enter your <Text style={styles.highlight}>Phone Number</Text> or{'\n'}
        <Text style={styles.highlight}>Email</Text>
      </Text>
      <Text style={styles.smallText}>
        If Phone number, mention country code.{'\n'}(example: +91 xxxxx xxxxx)
      </Text>
    </View>
      <View style={styles.formContainer}>
        <Text style={styles.subheading}>Account Details</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Phone Number / Email"
        />
        <Text style={styles.subheading}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon name={passwordVisible ? "eye" : "eye-off"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('General Info')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </ TouchableOpacity>
      <View style={styles.bottomBox}>

      <Text style={styles.subbuttonheader} onPress={() => navigation.navigate('OTP Verification Screen')}>
        Back to OTP
      </Text>
      <Text style={styles.subbuttonheader} onPress={() => navigation.navigate('Forgot Password')}>
        Forgot Password?
      </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  },
  logo: {
    marginLeft: 10,
    position: "absolute",
    top: 55,
    left: 10
  },
  headerBox: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 40,
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 130,
    
  },
  highlight: {
    color: '#FF5C35',
  },
  smallText: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#FF5C35',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '90%',
  },
  subheading: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: 'bold',
    marginTop: 10,
  },
  subbuttonheader: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    color: "#82919E",
  },
  formInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 15
  },
  passwordInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 15,
    flex: 1
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordToggle: {
    marginLeft: 10,
    position: "absolute",
    right: 10
  },
  continueButton: {
    borderWidth: 1,
    width: '90%',
    borderColor: '#FF5C35',
    borderRadius: 7,
    paddingVertical: 10,
    marginTop: 70,
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#FF5C35',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomBox: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between"
  }
});

export default App;
