import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import OTPInput from "../../components/OTPInput";

const OTPVerificationScreen = ({navigation}) => {
//   const [OTP, setOTP] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleResendOTP = () => {
    // Handle resend OTP logic
    console.log("Resending OTP...");
    setTimer(60);
  };

  const handleAlternativeLogin = () => {
    // Handle alternative login method logic
    console.log("Trying alternative login method...");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/huntsjob-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.header}>OTP Verification</Text>
      <Text style={styles.subheader}>
        An OTP (One-Time Password) has been sent to +91 xxxxx xxxxx. Please
        enter the OTP for verification process.
      </Text>

      <OTPInput />

      <TouchableOpacity
        onPress={handleResendOTP}
        disabled={timer > 0}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Resend OTP</Text>
        {timer > 0 && <Text style={styles.buttonText}>{timer}s</Text>}
      </TouchableOpacity>

      <Text style={styles.subbuttonheader} onPress={() => navigation.navigate('Alternate Login')}>
        Try other login method
      </Text>

      <TouchableOpacity style={styles.continueButton} onPress={() =>
        navigation.navigate('General Info')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    resizeMode: "contain",
    alignSelf: "flex-start",
    marginTop: 45,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    marginLeft: 10,
    position: "absolute",
    top: 55,
    left: 10
  },
  header: {
    fontSize: 24,
    marginTop: 110,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 16,
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF5C35",
  },
  subbuttonheader: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    color: "#82919E",
  },
  continueButton: {
    backgroundColor: "#FF5C35",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
    position: "absolute",
    bottom: 75,
    width: "100%",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OTPVerificationScreen;
