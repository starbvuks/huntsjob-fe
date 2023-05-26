import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";

import * as DocumentPicker from "expo-document-picker";

import NationalityPicker from "../../Pickers/NationalityPicker";

const EditExperienceForm = ({
  domesticMonths,
  setDomesticMonths,
  domesticYears,
  setDomesticYears,
  abroadMonths,
  setAbroadMonths,
  abroadYears,
  setAbroadYears,
  resume,
  setResume,
  resumeButtonText,
  setResumeButtonText,
}) => {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "application/msword", "text/plain"],
      });

      if (result.type === "success") {
        setResume(result.uri);
        // const fileInfo = await FileSystem.getInfoAsync(result.uri);
        const fileInfo = result.name;
        setResumeButtonText(fileInfo);
        console.log(fileInfo);
      }
    } catch (error) {
      console.log("Error picking document", error);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.subheading}>Abroad Work Experience:</Text>
        <View style={styles.dateContainer}>
          <View style={styles.experienceInputContainer}>
            <Text style={styles.experienceHeading}>Years</Text>
            <TextInput
              style={styles.experienceInput}
              value={domesticMonths}
              keyboardType="numeric"
              placeholder="Years"
              onChangeText={(text) => setDomesticMonths(text)}
            />
          </View>
          <View style={styles.experienceInputContainer}>
            <Text style={styles.experienceHeading}>Months</Text>
            <TextInput
              style={styles.experienceInput}
              value={domesticYears}
              keyboardType="numeric"
              placeholder="Months"
              onChangeText={(text) => setDomesticYears(text)}
            />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.subheading}>Domestic Work Experience:</Text>
        <View style={styles.dateContainer}>
          <View style={styles.experienceInputContainer}>
            <Text style={styles.experienceHeading}>Years</Text>
            <TextInput
              style={styles.experienceInput}
              value={abroadYears}
              keyboardType="numeric"
              placeholder="Years"
              onChangeText={(text) => setAbroadYears(text)}
            />
          </View>
          <View style={styles.experienceInputContainer}>
            <Text style={styles.experienceHeading}>Months</Text>
            <TextInput
              style={styles.experienceInput}
              value={abroadMonths}
              keyboardType="numeric"
              placeholder="Months"
              onChangeText={(text) => setAbroadMonths(text)}
            />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.subheading}>Nationality</Text>
        <NationalityPicker />
      </View>
      <View>
        <Text style={styles.subheading}>Resume</Text>
        <TouchableOpacity onPress={pickDocument} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{resumeButtonText}</Text>
        </TouchableOpacity>

        <Text style={styles.uploadInfo}>
          {" "}
          DOC, DOCx, PDF, RTF, Recruiters give first preference to candidates
          who have a resume. Max 5MB
        </Text>
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
  subheading: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "NunitoSans_700Bold",
    color: "#FF5C35",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  experienceInputContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  experienceHeading: {
    fontFamily: "NunitoSans_700Bold",
    marginVertical: 2,
    fontSize: 12,
  },
  experienceInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: 4,
    textAlign: "center",
    width: 80,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 12,
    width: "100%",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uploadInfo: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "black",
  },
  prevButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 10,
  },
  backIcon: {
    color: "#FFFFFF",
  },
});

export default EditExperienceForm;
