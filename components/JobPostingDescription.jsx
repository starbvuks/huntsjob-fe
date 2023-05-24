import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { fetchJobPostingDescription } from "../models/jobPostingDescription";

const JobPostingDescription = ({ route }) => {
  const { roleName, company, location, date, yearsOfExperience, companyLogo } =
    route.params;
  const navigation = useNavigation();

  const [activeSection, setActiveSection] = useState("Description");

  const handleBackPress = () => {
    navigation.goBack();
  };

  // use fetchJobPostingDescription to fetch details and plugin Text
  const renderSectionContent = () => {
    switch (activeSection) {
      case "Description":
        return (
          <View style={styles.section}>
            <Text style={styles.description}>
              XYZ Builders is seeking a skilled and experienced Carpenter to
              join our dynamic team. As a Carpenter, you will be responsible for
              constructing, installing, and repairing structures and fixtures
              made of wood, plywood, and other materials. Your expertise will be
              vital in ensuring the success and timely completion of our
              projects while maintaining the highest standards of craftsmanship.
            </Text>
          </View>
        );
      case "Company":
        return (
          <View style={styles.section}>
            <Text style={styles.description}>
              XYZ Builders is a leading construction company committed to
              delivering exceptional craftsmanship and superior quality in every
              project we undertake. With over 20 years of experience, we
              specialize in residential and commercial construction, focusing on
              custom homes, renovations, and remodeling projects. Our team is
              dedicated to providing unparalleled service to our clients,
              ensuring their vision becomes a reality.
            </Text>
          </View>
        );
      case "Qualifications":
        return (
          <View style={styles.section}>
            <Text style={styles.description}>
              Proven experience as a Carpenter, preferably in the construction
              industry Proficient in reading blueprints and technical drawings
              Strong knowledge of carpentry techniques and tools Excellent
              manual dexterity and physical stamina Ability to work
              independently and as part of a team Attention to detail and
              precision in workmanship Good communication and problem-solving
              skills High school diploma or equivalent Valid driver's license
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={30} />
        </TouchableOpacity>
        <Image
          source={
            typeof companyLogo === "string" ? { uri: companyLogo } : companyLogo
          }
          style={styles.companyLogo}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.roleName}>{roleName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.company}>{company} /</Text>
            <Text style={styles.location}>
              <Icon name="map-pin" size={16} /> {location}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setActiveSection("Description")}
            style={[
              styles.button,
              activeSection === "Description" && styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                activeSection === "Description" && styles.activeButtonText,
              ]}
            >
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveSection("Company")}
            style={[
              styles.button,
              activeSection === "Company" && styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                activeSection === "Company" && styles.activeButtonText,
              ]}
            >
              Company
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveSection("Qualifications")}
            style={[
              styles.button,
              activeSection === "Qualifications" && styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                activeSection === "Qualifications" && styles.activeButtonText,
              ]}
            >
              Qualifications
            </Text>
          </TouchableOpacity>
        </View>

        {renderSectionContent()}

        <View style={styles.aboutJob}>
          <Text style={styles.aboutJobTitle}>About The Job</Text>
          <Text style={styles.aboutJobText}>
            This is a full-time position offering a competitive salary
            commensurate with experience and expertise. As a Carpenter at XYZ
            Builders, you will have the opportunity to work on exciting projects
            that showcase your skills and creativity. We provide a supportive
            and collaborative work environment, where your contributions are
            valued and recognized. Additionally, we offer ongoing professional
            development opportunities to help you enhance your carpentry skills
            and stay up to date with industry trends. Join our team at XYZ
            Builders and be a part of our mission to deliver exceptional
            craftsmanship and create remarkable spaces that exceed our clients'
            expectations. To apply, please submit your resume and portfolio of
            previous work to [email protected]
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Icon name="bookmark" size={24} style={styles.bookmarkIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply For Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    padding: 6,
    marginTop: 40,
    marginLeft: 30,
    width: "11%",
    textAlign: "center",
    backgroundColor: "#EEEDF6",
    borderRadius: 10,
  },
  companyLogo: {
    alignSelf: "center",
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginBottom: 10,
    backgroundColor: "#EEEDF6",
    borderRadius: 25,
  },
  headerContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
  roleName: {
    fontSize: 24,
    marginBottom: 8,
    paddingHorizontal: 16,
    fontFamily: "NunitoSans_900Black",
  },
  company: {
    fontSize: 18,
    marginBottom: 30,
    paddingHorizontal: 6,
    fontFamily: "NunitoSans_700Bold",
  },
  location: {
    fontSize: 18,
    fontFamily: "NunitoSans_400Regular",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#F3F5F9",
  },
  activeButton: {
    backgroundColor: "#EC8302",
  },
  buttonText: {
    fontSize: 14,
    color: "#4A4A4A",
    fontFamily: "NunitoSans_400Regular",
  },
  activeButtonText: {
    color: "#FFFFFF",
  },
  section: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    backgroundColor: "#F3F5F9",
    width: "90%",
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "NunitoSans_400Regular",
  },
  aboutJob: {
    marginVertical: 20,
  },
  aboutJobTitle: {
    fontSize: 20,
    fontFamily: "NunitoSans_800ExtraBold",
    color: "#EC8302",
    marginBottom: 10,
    marginLeft: 30,
  },
  aboutJobText: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#F3F5F9",
    width: "90%",
    alignSelf: "center",
    fontFamily: "NunitoSans_400Regular",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
  },
  bookmarkButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#EC8302",
    borderRadius: 15,
  },
  bookmarkIcon: {
    color: "#EC8302",
  },
  applyButton: {
    backgroundColor: "#EC8302",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "80%",
  },
  applyButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "NunitoSans_700Bold",
    color: "#FFFFFF",
  },
});

export default JobPostingDescription;
