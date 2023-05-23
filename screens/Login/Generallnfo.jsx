import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as DocumentPicker from "expo-document-picker";

import BasicDetailsForm from "../../components/Forms/BasicDetailsForm";
import ExperienceForm from "../../components/Forms/ExperienceForm";
import GeneralTabBar from "../../components/Forms/GeneralTabBar";

const GeneralInfoScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [domesticExperience, setdomesticExperience] = useState("");
  const [abroadExperience, setabroadExperience] = useState("");
  const [nationality, setNationality] = useState("India");
  const [resume, setResume] = useState(null);
  const [resumeButtonText, setResumeButtonText] = useState("Upload Resume");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [showExperience, setShowExperience] = useState(false);

  const [activeTab, setActiveTab] = useState("basicDetails");
  const [animatedValue] = useState(new Animated.Value(0));

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedCallback, setSelectedCallback] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const [domesticMonths, setDomesticMonths] = useState(null);
  const [domesticYears, setDomesticYears] = useState(null);
  const [abroadMonths, setAbroadMonths] = useState(null);
  const [abroadYears, setAbroadYears] = useState(null);

  const handleTransition = () => {
    Animated.timing(animatedValue, {
      toValue: showExperience ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleTransition();
  }, [showExperience]);

  useEffect(() => {
    setActiveTab(showExperience ? "experience" : "basicDetails");
  }, [showExperience]);

  const basicDetailsFormStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -300],
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };

  const experienceFormStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0],
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const handleSubmit = () => {
    console.log("Full Name: ", fullName);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
    console.log("Domestic Experience: ", domesticExperience);
    console.log("Abroad Experience: ", abroadExperience);
    console.log("Nationality: ", nationality);
    console.log("Resume: ", resume);

    navigation.navigate("Notification Selection");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon name="arrow-back" size={32} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>General Info</Text>
      </View>

      <GeneralTabBar activeTab={activeTab} />

      {!showExperience ? (
        <Animated.View style={basicDetailsFormStyle}>
          <BasicDetailsForm
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
        </Animated.View>
      ) : (
        <Animated.View style={experienceFormStyle}>
          <ExperienceForm
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
          <View style={styles.bottomRow}>
            <TouchableOpacity
              onPress={() => setShowExperience(false)}
              style={styles.prevButton}
            >
              <Icon name="arrow-back" size={32} style={styles.backIconBottom} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerRow: {
    flex: 1,
    gap: 8,
    marginVertical: 10,
    padding: 30,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    gap: 30,
    backgroundColor: "#4A051C",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "93%",
    marginBottom: 60,
  },
  backIconBottom: {
    color: "#970C0C",
  },
  prevButton: {
    borderColor: "#970C0C",
    borderWidth: 1.5,
    padding: 4,
    borderRadius: 5,
    marginLeft: 30,
  },
  continueButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    width: "75%",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GeneralInfoScreen;
