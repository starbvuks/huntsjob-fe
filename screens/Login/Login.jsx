import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
} from "@expo-google-fonts/nunito-sans";
import AppLoading from "expo-app-loading";

const LoginScreen = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
  });

  const handleSubmit = () => {
    // Handle form submission
    console.log(`Country code: \${countryCode}, Phone number: \${phoneNumber}`);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/huntsjob-logo.png")}
          style={styles.logo}
        />

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/login-graphic.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.header}>Sign in</Text>

        <Text style={styles.subheader}>
          Please enter your Phone number to continue
        </Text>

        <View style={styles.phoneContainer}>
          <RNPickerSelect
            style={customPickerStyles}
            value={countryCode}
            onValueChange={(value) => setCountryCode(value)}
            items={[
              { label: "US (+1)", value: "+1" },
              { label: "UK (+44)", value: "+44" },
              { label: "Germany (+49)", value: "+49" },
              { label: "India (+91)", value: "+91" },
              // ... Add more country codes
            ]}
          />
          <TextInput
            style={styles.phoneInput}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>

        <Text style={styles.subbuttonheader}>Or Sign in with</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="google" size={20} color="#FF5C35" />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="facebook" size={20} color="#FF5C35" />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("OTP Verification Screen")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
    left: 10
  },
  imageContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    height: "90%",
    resizeMode: "contain",
    marginTop: 150,
  },
  header: {
    fontSize: 24,
    marginTop: 80,
    marginBottom: 10,
    alignSelf: "flex-start",
    fontFamily: "NunitoSans_800ExtraBold",
  },
  subheader: {
    fontSize: 16,
    marginVertical: 5,
    alignSelf: "flex-start",
    fontFamily: "NunitoSans_400Regular",
  },
  subbuttonheader: {
    fontSize: 16,
    fontFamily: "NunitoSans_400Regular",
    marginVertical: 10,
    textAlign: "center",
    color: "#82919E",
  },
  phoneContainer: {
    borderColor: "#D5DADF",
    borderWidth: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  phoneInput: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    fontFamily: "NunitoSans_400Regular",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 6,
    marginHorizontal: 5,
    borderColor: "#FF5C35",
    borderRadius: 2,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "NunitoSans_800ExtraBold",
    color: "#FF5C35",
  },
  continueButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
    width: "100%",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "NunitoSans_700Bold",
    textAlign: "center",
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default LoginScreen;
