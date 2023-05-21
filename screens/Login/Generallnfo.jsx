import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import * as DocumentPicker from "expo-document-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState({
    domesticStartDate: null,
    domesticEndDate: null,
    abroadStartDate: null,
    abroadEndDate: null,
  });

  const showPicker = (type) => {
    setSelectedType(type);
    setShowDatePicker(true);
  };

  const hidePicker = () => {
    setShowDatePicker(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setDates((prevDates) => ({ ...prevDates, [selectedType]: date }));
    hidePicker();
  };

  // const [date, setDate] = useState(new Date());
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "ios");
  //   setDate(currentDate);
  // };

  // const showPicker = () => {
  //   setShow(true);
  // };

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
      <View style={styles.formContainer}>
        <Text style={styles.enterDetails}>Enter your details</Text>
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
        <View>
          <View>
            <Text style={styles.subheading}>Domestic Work Experience</Text>
            <View style={styles.dateContainer}>
              <TouchableOpacity
                onPress={() => showPicker("domesticStartDate")}
                style={styles.dateButton}
              >
                <Text style={styles.dateButtonText}>Start Date</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showPicker("domesticEndDate")}
                style={styles.dateButton}
              >
                <Text style={styles.dateButtonText}>Start Date</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.subheading}>Abroad Work Experience</Text>
            <View style={styles.dateContainer}>
              <TouchableOpacity
                onPress={() => showPicker("domesticStartDate")}
                style={styles.dateButton}
              >
                <Text style={styles.dateButtonText}>Start Date</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showPicker("domesticEndDate")}
                style={styles.dateButton}
              >
                <Text style={styles.dateButtonText}>Start Date</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DateTimePicker
            value={selectedDate}
            isVisible={showDatePicker}
            mode="date"
            display="spinner"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
            dateFormat="MM-yyyy"
          />
        </View>
        <View>
          <Text style={styles.subheading}>Nationality</Text>
          <RNPickerSelect
            style={customPickerStyles}
            onValueChange={setNationality}
            value={nationality}
            items={[
              { label: "US", value: "US" },
              { label: "UK", value: "UK" },
              { label: "India", value: "India" },
              { label: "Australia", value: "Australia" },
            ]}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={pickDocument}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>{resumeButtonText}</Text>
          </TouchableOpacity>
          {/* <Button title="Upload Resume" onPress={pickDocument} /> */}

          <Text style={styles.uploadInfo}>
            {" "}
            DOC, DOCx, PDF, RTF, Recruiters give first preference to candidates
            who have a resume. Max 5MB
          </Text>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
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
    marginVertical: 20,
    padding: 30,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
  },
  enterDetails: {
    fontSize: 25,
    fontFamily: "NunitoSans_800ExtraBold",
    color: "#FFFFFF",
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    marginVtOP: 20,
    gap: 30,
    backgroundColor: "#4A051C",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  subheading: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "NunitoSans_700Bold",
    color: "#FFFFFF",
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
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
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
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateButton: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: "50%",
  },
  dateButtonText: {
    fontFamily: "NunitoSans_400Regular",
  },
  uploadInfo: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "#FFFFFF",
  },
  continueButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 40,
    width: "100%",
  },
  continueButtonText: {
    color: "#ED8200",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    borderColor: "#D5DADF",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default GeneralInfoScreen;
