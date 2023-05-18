import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/huntsjob-logo.png")}
        style={styles.logo}
      />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/account-created.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.header}>Account Creation{"\n"}Successful!</Text>

      <View style={styles.continueContainer}>
        <Text style={styles.subheader}>Continue to the dashboard</Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("Bottom Navigator")}
        >
          <Icon name="arrow-right" size={32} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    left: 10,
  },
  imageContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60,
  },
  image: {
    height: "90%",
    resizeMode: "contain",
    marginTop: 150,
  },
  header: {
    fontSize: 36,
    marginTop: 80,
    marginBottom: 10,
    alignSelf: "flex-start",
    fontFamily: "NunitoSans_800ExtraBold",
  },
  continueContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    gap: 25,
  },
  subheader: {
    fontSize: 18,
    marginVertical: 25,
    paddingTop: 2,
    alignSelf: "flex-start",
    fontFamily: "NunitoSans_400Regular",
  },
  continueButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  backIcon: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "NunitoSans_700Bold",
    textAlign: "center",
  },
});

export default LoginScreen;
