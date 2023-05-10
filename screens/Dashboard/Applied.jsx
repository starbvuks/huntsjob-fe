import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

export default function Applied() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Header, Search Bar, and Settings Button */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Applied Jobs</Text>
        </View>
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
      <View style={styles.bottomContainer}>
        {/* Applied Job */}
        <Text style={styles.bottomSubheading}>Jobs you Applied For</Text>
        {/* Render Applied Jobs */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topContainer: {
    padding: 20,
    backgroundColor: "#FEF4EA",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 60,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    color: "#2E475D",
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
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  search: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
  },
  searchButton: {
    position: "absolute",
    top: 16,
    right: 14,
  },
  settingsButton: {
    color: "#FFFFFF",
    alignSelf: "center",
    padding: 16,
  },
  bottomContainer: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomSubheading: {
    fontFamily: "NunitoSans_700Bold",
    marginTop: 30,
    fontSize: 20,
  },
  settingsContainer: {
    borderRadius: 10,
    backgroundColor: "#2E475D",
  },
  settingsButton: {
    color: "#FFFFFF",
    alignSelf: "center",
    padding: 16,
  },
});
