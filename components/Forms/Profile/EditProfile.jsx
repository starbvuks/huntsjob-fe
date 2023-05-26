import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import EditLoginInfo from "./EditLoginInfo";
import EditBasicDetails from "./EditBasicDetails";
import EditExperienceForm from "./EditExperienceForm";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nationality, setNationality] = useState("India");
  const [resume, setResume] = useState(null);
  const [resumeButtonText, setResumeButtonText] = useState("Upload Resume");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [domesticMonths, setDomesticMonths] = useState(null);
  const [domesticYears, setDomesticYears] = useState(null);
  const [abroadMonths, setAbroadMonths] = useState(null);
  const [abroadYears, setAbroadYears] = useState(null);

  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [industry, setIndustry] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");

  return (
    <ScrollView>
      <Text style={styles.header}>Edit Profile Details</Text>
      <View style={styles.container}>
        <EditLoginInfo
          onNext={() => setShowExperience(true)}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          isConfirmPasswordVisible={isConfirmPasswordVisible}
          setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
        />
        <View style={styles.border} />
        <EditExperienceForm
          domesticMonths={domesticMonths}
          setDomesticMonths={setDomesticMonths}
          domesticYears={domesticYears}
          setDomesticYears={setDomesticYears}
          abroadMonths={abroadMonths}
          setAbroadMonths={setAbroadMonths}
          abroadYears={abroadYears}
          setAbroadYears={setAbroadYears}
          resume={resume}
          setResume={setResume}
          resumeButtonText={resumeButtonText}
          setResumeButtonText={setResumeButtonText}
        />
        <View style={styles.border} />
        <EditBasicDetails
          currentSalary={currentSalary}
          setCurrentSalary={setCurrentSalary}
          expectedSalary={expectedSalary}
          setExpectedSalary={setExpectedSalary}
          noticePeriod={noticePeriod}
          setNoticePeriod={setNoticePeriod}
          industry={industry}
          setIndustry={setIndustry}
          preferredLocation={preferredLocation}
          setPreferredLocation={setPreferredLocation}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 28,
    color: "#FF5C35",
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 30,
    fontFamily: "NunitoSans_800ExtraBold",
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
    width: "85%",
    marginBottom: 100,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EditProfile;
