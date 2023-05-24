import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/FontAwesome";

import authModel from "../../models/authModel";
import getCountryCodes from "../../models/countryCodeModel";
import CountryCodePicker from "../../components/Modals/CountryCodePicker";

import {
  useFonts,
  NunitoSans_200ExtraLight,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
} from "@expo-google-fonts/nunito-sans";

import * as SplashScreen from "expo-splash-screen";

const LoginScreen = ({ navigation }) => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  let [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
  });

  useEffect(() => {
    const fetchCountryCodes = async () => {
      await SplashScreen.preventAutoHideAsync();
      const data = await getCountryCodes();
      setCountryCodes(data);
    };
    fetchCountryCodes();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once the fonts are loaded
    }
  }, [fontsLoaded]);

  const handlePhoneNumberChange = (text) => {
    // Remove all non-digit characters from the input
    const cleanedText = text.replace(/\D/g, "");
    // Split the input into groups of 5 digits or less
    const groups = cleanedText.match(/.{1,5}/g) || [];
    // Join the groups with a space between each group
    const formattedText = groups.join(" ");
    // Limit the input to a maximum of 10 digits
    const truncatedText = formattedText.slice(0, 12);

    setPhoneNumber(truncatedText);
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/transparent-logo.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.header}>Sign in</Text>

        <Text style={styles.subheader}>
          Please enter your Phone number to continue
        </Text>

        <View style={styles.phoneContainer}>
          <CountryCodePicker />
          <TextInput
            style={styles.phoneInput}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            onChangeText={handlePhoneNumberChange}
            value={phoneNumber}
            maxLength={12}
          />
        </View>

        <Text style={styles.subbuttonheader}>Or Sign in with</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => authModel.googleLogin}
          >
            <Icon name="google" size={20} color="#FF5C35" />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => authModel.facebookLogin}
          >
            <Icon name="facebook" size={20} color="#FF5C35" />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() =>
            authModel.regularLogin(phoneNumber, countryCode, navigation)
          }
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
    left: 10,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    resizeMode: "contain",
  },
  header: {
    fontSize: 24,
    marginTop: 30,
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

export default LoginScreen;
