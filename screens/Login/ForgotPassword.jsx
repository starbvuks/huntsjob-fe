import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Handle password reset logic here
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/huntsjob-logo.png")}
        style={styles.logo}
      />
      <View style={[styles.logo, { height: "33%" }]} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Forgot Password?</Text>
        <Text style={styles.subheading}>
          To reset your password, you need your email or mobile number that can
          be authenticated
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#ccc" }]}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Alternate Login")}
          >
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    marginLeft: 10,
    position: "absolute",
    top: 55,
    left: 10,
  },
  imageContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  image: {
    marginTop: 50,
  },
  headerContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 28,
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    fontFamily: "NunitoSans_800ExtraBold",
    fontSize: 24,
    marginTop: 130,
  },
  subheading: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "left",
    fontFamily: "NunitoSans_400Regular",
  },
  formContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginTop: 100,
    width: "90%",
  },
  label: {
    fontSize: 16,
    fontFamily: "NunitoSans_800ExtraBold",
    marginBottom: 5,
    color: "#FF5C35",
  },
  input: {
    borderColor: "#F0F0F0",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 15,
    fontFamily: "NunitoSans_400Regular",
  },
  button: {
    backgroundColor: "#FF5C35",
    borderRadius: 7,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "NunitoSans_700Bold",
    textAlign: "center",
  },
});

export default ForgotPassword;
