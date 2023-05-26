import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import ProfilePicture from "../../../components/ProfilePicture";
import Experience from "../../../components/Details/ExperienceDetails";
import Education from "../../../components/Details/EducationDetails";

import ExperienceModal from "../../../components/Modals/ExperienceModal";

const LowerSection = () => {
  const [isExperienceModalVisible, setIsExperienceModalVisible] =
    useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const navigation = useNavigation();

  const editProfileHandler = () => {
    navigation.navigate("Edit Profile");
  };

  const personalDetailsHandler = () => {
    navigation.navigate("Personal Details");
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.pfpText}>User Name</Text>
      <View style={styles.topBottonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => editProfileHandler()}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => personalDetailsHandler()}
        >
          <Text style={styles.buttonText2}>Edit Personal Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionSubheading}>Experience</Text>
          <View style={styles.sectionHeadIcon}>
            <Icon
              name="plus"
              size={24}
              onPress={() => setIsExperienceModalVisible(true)}
            />
            <Icon name="edit-3" size={22} />
            <ExperienceModal
              visible={isExperienceModalVisible}
              onClose={() => setIsExperienceModalVisible(false)}
              // onSubmit={(experienceData) => {
              //   // Handle the submission of experience data
              // }}
            />
          </View>
        </View>
        <Experience userId={12345} isEditMode={isEditMode} />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionSubheading}>Education</Text>
          <View style={styles.sectionHeadIcon}>
            <Icon name="plus" size={24} />
            <Icon name="edit-3" size={22} />
          </View>
        </View>
        <Education userId={12345} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    minHeight: 700,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    alignItems: "center",
    marginTop: 60,
    paddingBottom: 60,
  },
  pfpText: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
    marginTop: 82,
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    marginTop: 30,
    marginHorizontal: 40,
    fontSize: 14,
    letterSpacing: 0.1,
    textAlign: "center",
  },
  topBottonContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 20,
    backgroundColor: "#2E475D",
    marginTop: 30,
  },
  button2: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#2E475D",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 14,
    color: "#F3F3F3",
    fontFamily: "NunitoSans_400Regular",
  },
  buttonText2: {
    fontSize: 14,
    color: "#2E475D",
    fontFamily: "NunitoSans_400Regular",
  },
  section: {
    padding: 24,
    borderRadius: 15,
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    width: "95%",
    alignSelf: "center",
  },
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeadIcon: {
    flexDirection: "row",
    gap: 18,
  },
  sectionSubheading: {
    fontFamily: "NunitoSans_800ExtraBold",
    fontSize: 18,
    letterSpacing: 0.1,
  },
});

export default LowerSection;
