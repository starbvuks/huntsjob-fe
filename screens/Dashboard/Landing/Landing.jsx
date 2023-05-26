import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

// import { fetchIndustries } from "../../../models/industriesModel.js";

import LowerSection from "./LowerSection";

const Dashboard = ({ navigation }) => {
  const userName = "John Doe";

  const onFilterActivated = (filterValue) => {
    // Update the state in the Dashboard component based on the filter value
  };
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#2E475D"
        barStyle={"light-content"}
      />
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Hello, {userName}</Text>
          <Icon
            name="notifications-outline"
            size={30}
            style={{ color: "#FFFFFF" }}
          />
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput style={styles.search} placeholder="Search" />
            <Icon name="search" size={24} style={styles.searchButton} />
          </View>
          <TouchableOpacity
            style={styles.settingsContainer}
            onPress={() => navigation.navigate("Dynamic Filter")}
          >
            <Icon2 name="sliders-h" size={24} style={styles.settingsButton} />
          </TouchableOpacity>
        </View>
      </View>

      <LowerSection onFilterActivated={onFilterActivated} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#2E475D",
    top: 0,
  },
  topContainer: {
    padding: 20,
    marginTop: 10,
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
  secondHeader: {
    fontSize: 34,
    textAlign: "center",
    color: "#2E475D",
    fontFamily: "NunitoSans_800ExtraBold",
    marginTop: 10,
  },
  subheader: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "NunitoSans_200ExtraLight",
  },
  industryButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  industryButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 4,
  },
  industryButtonText: {
    color: "#FF5C35",
    fontSize: 14,
    fontFamily: "NunitoSans_700Bold",
    textAlign: "center",
  },
});

export default Dashboard;
