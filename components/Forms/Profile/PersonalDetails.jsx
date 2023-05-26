import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import GenderPicker from "../../Pickers/GenderPicker";
import MaritalStatusPicker from "../../Pickers/MaritalStatusPicker";
import LanguagePicker from "../../Pickers/LanguagePicker";
import LanguageProficiency from "../../Pickers/LanguageProficiency";
import ReligionPicker from "../../Pickers/ReligionPicker";

const PersonalDetails = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passportExpiryDate, setPassportExpiryDate] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>
      <Text style={styles.subHeading}>Date of Birth</Text>
      <TextInput
        style={styles.form}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="MM/DD/YYYY"
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.subHeading}>Gender</Text>
        <GenderPicker />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.subHeading}>Martial Status</Text>
        <MaritalStatusPicker />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.subHeading}>Language</Text>
        <LanguagePicker />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.subHeading}>Language Proficiency</Text>
        <LanguageProficiency />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.subHeading}>Religion</Text>
        <ReligionPicker />
      </View>

      <Text style={styles.subHeading}>Passport Number</Text>
      <TextInput
        style={styles.form}
        value={passportNumber}
        onChangeText={setPassportNumber}
        placeholder="NNNNNN"
      />
      <Text style={styles.subHeading}>Passport Expiry Date</Text>
      <TextInput
        style={styles.form}
        value={passportExpiryDate}
        onChangeText={setPassportExpiryDate}
        placeholder="MM/DD"
      />
      <TouchableOpacity
        onPress={() => {
          // Handle saving the data
        }}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  header: {
    fontSize: 28,
    color: "#FF5C35",
    marginTop: 40,
    marginBottom: 40,
    fontFamily: "NunitoSans_800ExtraBold",
  },
  pickerContainer: {
    marginBottom: 30,
  },
  form: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    fontFamily: "NunitoSans_400Regular",
    borderColor: "#F0F0F0",
    borderWidth: 1.5,
    marginTop: 10,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontFamily: "NunitoSans_700Bold",
    color: "#FF5C35",
  },
  border: {
    width: "90%",
    backgroundColor: "#CCC",
    height: 2,
    alignSelf: "center",
  },
  submitButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    alignSelf: "center",
    width: "100%",
    marginTop: 30,
    marginBottom: 100,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
