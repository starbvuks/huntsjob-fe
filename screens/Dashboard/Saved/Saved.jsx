import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

import LowerSection from "./LowerSection";

export default function Saved() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Saved Jobs</Text>
          <Icon
            name="notifications-outline"
            size={30}
            style={{ color: "#FFFFFF" }}
          />
        </View>
        {/* <ProfileReminder /> */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput style={styles.search} placeholder="Search" />
            <Icon name="search" size={24} style={styles.searchButton} />
          </View>
          <View style={styles.settingsContainer}>
            <Icon2 name="sliders-h" size={24} style={styles.settingsButton} />
          </View>
        </View>
      </View>

      <LowerSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E475D",
    top: 0,
  },
  topContainer: {
    padding: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    color: "#FEF4EA",
    alignSelf: "flex-start",
    fontFamily: "NunitoSans_800ExtraBold",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  searchBar: {
    width: "80%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  search: {
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    position: "absolute",
    color: "#2E475D",
    top: 15,
    right: 16,
  },
  settingsContainer: {
    borderRadius: 10,
    backgroundColor: "#FEF4EA",
    alignItems: "center",
    justifyContent: "center",
  },
  settingsButton: {
    color: "#2E475D",
    padding: 16,
  },
});
