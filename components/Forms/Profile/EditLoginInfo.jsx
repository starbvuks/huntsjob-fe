import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const EditLoginInfo = ({
  fullName,
  setFullName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isPasswordVisible,
  setIsPasswordVisible,
  isConfirmPasswordVisible,
  setIsConfirmPasswordVisible,
}) => {
  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.subheading}>Full Name</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View>
        <Text style={styles.subheading}>Email ID</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Email ID"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.phoneContainer}>
        <View style={styles.passwordContainer}>
          <Text style={styles.subheading}>Password</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon name={isPasswordVisible ? "eye" : "eye-off"} size={24} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subheading}>Confirm Password</Text>
        <View style={styles.phoneContainer}>
          <TextInput
            style={styles.phoneInput}
            placeholder="Confirm Password"
            secureTextEntry={!isConfirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    gap: 30,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  enterDetails: {
    fontSize: 25,
    fontFamily: "NunitoSans_800ExtraBold",
    color: "#FF5C35",
    marginTop: -20,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "NunitoSans_700Bold",
    color: "#FF5C35",
  },
  passwordContainer: {
    flex: 1,
  },
  phoneInput: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    fontFamily: "NunitoSans_400Regular",
    borderColor: "#F0F0F0",
    borderWidth: 1.5,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    bottom: 15,
  },
  buttonContainer: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});

export default EditLoginInfo;
