import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import GeneralInfoScreen from "../../screens/Login/Generallnfo";

const EditProfile = () => {
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [industry, setIndustry] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.subheading}>Current Salary</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Salary"
        value={currentSalary}
        onChangeText={setCurrentSalary}
      />
      <Text style={styles.subheading}>Expected Salary</Text>
      <TextInput
        style={styles.input}
        placeholder="Expected Salary"
        value={expectedSalary}
        onChangeText={setExpectedSalary}
      />
      <Text style={styles.subheading}>Notice Period</Text>
      <TextInput
        style={styles.input}
        placeholder="Notice Period"
        value={noticePeriod}
        onChangeText={setNoticePeriod}
      />
      <Text style={styles.subheading}>Industry</Text>
      <TextInput
        style={styles.input}
        placeholder="Industry"
        value={industry}
        onChangeText={setIndustry}
      />
      <Text style={styles.subheading}>Preferred Job Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Preferred Job Location"
        value={preferredLocation}
        onChangeText={setPreferredLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    fontFamily: "NunitoSans_400Regular",
    borderColor: "#F0F0F0",
    borderWidth: 1.5,
    marginTop: 10,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "NunitoSans_700Bold",
    color: "#FF5C35",
  },
  buttonContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EditProfile;
