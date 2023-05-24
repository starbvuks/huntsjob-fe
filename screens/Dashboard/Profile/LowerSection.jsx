import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import ProfilePicture from "../../../components/ProfilePicture";
import SalaryForm from "../../../components/Forms/SalaryForm";

const LowerSection = () => {
  const navigation = useNavigation();

  const editSalaryHandler = () => {
    navigation.navigate("Salary Form");
  };

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.pfpText}>User Name</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => editSalaryHandler()}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionSubheading}>Experience</Text>
          <View style={styles.sectionHeadIcon}>
            <Icon name="plus" size={24} />
            <Icon name="edit-3" size={22} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionSubheading}>Education</Text>
          <View style={styles.sectionHeadIcon}>
            <Icon name="plus" size={24} />
            <Icon name="edit-3" size={22} />
          </View>
        </View>
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 20,
    backgroundColor: "#2E475D",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 14,
    color: "#F3F3F3",
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
