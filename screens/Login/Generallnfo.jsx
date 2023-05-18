// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import RNPickerSelect from "react-native-picker-select";
// import Icon from "react-native-vector-icons/FontAwesome";

// const GeneralInfo = ({ navigation }) => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('OTP Verification Screen')}
//           style={styles.backArrowContainer}
//         >
//           <Icon name="arrow-left" size={20} />
//         </TouchableOpacity>
//         <Text style={styles.backArrowText}>General Info</Text>
//       </View>

//       <ScrollView style={styles.formContainer} showsScrollIndicator={false}>
//         {[
//           "Full Name",
//           "Email ID",
//           "Mobile No",
//           "Password",
//           "Confirm Password",
//           "Current Position",
//           "Current Position Description",
//           "Overseas/Abroad Experience",
//         ].map((label, index) => (
//           <View key={index} style={styles.formField}>
//             <Text style={styles.formLabel}>{label}</Text>
//             <TextInput
//               style={styles.formInput}
//               secureTextEntry={label === "Password" && !passwordVisible}
//               placeholder={label}
//             />
//             {label === "Password" && (
//               <TouchableOpacity
//                 onPress={() => setPasswordVisible(!passwordVisible)}
//                 style={styles.showPasswordIcon}
//               >
//                 <Icon name={passwordVisible ? "eye" : "eye-slash"} size={18} />
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}

//         <View style={styles.formField}>
//           <Text style={styles.formLabel}>Nationality</Text>
//           <RNPickerSelect
//             style={customPickerStyles}
//             // value={countryCode}
//             // onValueChange={(value) => setCountryCode(value)}
//             items={[
//               { label: "Select Nationality", value: "" },
//               { label: "United States", value: "US" },
//               { label: "United Kingdom", value: "UK" },
//               { label: "India", value: "IN" },
//               // ... Add more country codes
//             ]}
//           />
//         </View>

//         <View style={styles.formField}>
//           <Text style={styles.formLabel}>Current Location</Text>
//           <TextInput style={styles.formInput} placeholder="Current Location" />
//         </View>
//         <TouchableOpacity style={styles.uploadButton}>
//           <Text style={styles.uploadButtonText}>Upload Resume</Text>
//         </TouchableOpacity>
//         <Text style={styles.uploadInfo}>
//           DOC, DOCx, PDF, RTF, Recruiters give first preference to candidates
//           who have a resume. Max 5MB
//         </Text>

//         <TouchableOpacity style={styles.continueButton}>
//           <Text style={styles.continueButtonText}>Continue</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-start",
//     padding: 20,
//     backgroundColor: "#FFFFFF",
//   },
//   header: {
//     marginTop: 50,
//     marginBottom: 30,
//     gap: 10,
//     display: "flex",
//     flexDirection: "row",

//     alignSelf: "flex-start",
//   },
//   backArrowContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "flex-start",
//   },
//   backArrowText: {
//     marginLeft: 5,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   formContainer: {
//     alignSelf: "stretch",
//     marginBottom: 20,
//   },
//   formField: {
//     marginBottom: 30,
//   },
//   formLabel: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   formInput: {
//     borderWidth: 1,
//     borderColor: "#D5DADF",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 3,
//     marginTop: 5,
//   },
//   showPasswordIcon: {
//     position: "absolute",
//     top: 35,
//     right: 10,
//   },
//   formPicker: {
//     borderWidth: 1,
//     borderColor: "#D5DADF",
//     borderRadius: 3,
//     marginTop: 5,
//   },
//   uploadButton: {
//     borderWidth: 1,
//     borderColor: "#D5DADF",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 3,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   uploadButtonText: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   uploadInfo: {
//     fontSize: 12,
//     textAlign: "center",
//     marginTop: 10,
//   },
//   continueButton: {
//     backgroundColor: "#FF5C35",
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginVertical: 20,
//     width: "100%",
//   },
//   continueButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// const customPickerStyles = StyleSheet.create({
//   inputIOS: {
//     borderWidth: 1,
//     borderColor: "#D5DADF",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 3,
//     marginTop: 5,
//   },
//   inputAndroid: {
//     borderWidth: 1,
//     borderColor: "#D5DADF",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 3,
//     marginTop: 5,
//   },
// });

// export default GeneralInfo;

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

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
        <TouchableOpacity
          onPress={() => navigation.navigate("OTP Verification Screen")}
        >
          <Icon name="arrow-back" size={32} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>General Info</Text>
      </View>
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
        <View>
          <Text style={styles.subheading}>Domestic Work Experience</Text>
          <TextInput
            style={styles.phoneInput}
            multiline
            minHeight={90}
            placeholder="Describe your role in detail"
            onChangeText={setdomesticExperience}
            value={domesticExperience}
          />
        </View>
        <View>
          <Text style={styles.subheading}>Abroad Work Experience</Text>
          <TextInput
            style={styles.phoneInput}
            multiline
            minHeight={90}
            placeholder="Describe your role in detail"
            onChangeText={setabroadExperience}
            value={abroadExperience}
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
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 30,
    backgroundColor: "#FFFFFF"
  },
  headerRow: {
    flex: 1,
    gap: 8,
    marginVertical: 20,
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
    marginVertical: 20,
    gap: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  passwordContainer: {
    flex: 1,
  },
  phoneInput: {
    flex: 1,
    padding: 10,
    borderColor: "#D5DADF",
    borderWidth: 1,
    borderRadius: 5,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    bottom: 8,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#D5DADF",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  uploadInfo: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: "#FF5C35",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 100,
    width: "100%",
  },
  continueButtonText: {
    color: "#fff",
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
});

export default GeneralInfoScreen;
