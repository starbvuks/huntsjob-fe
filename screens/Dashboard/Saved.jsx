import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Saved() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Saved Jobs</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/* Saved Jobs */}
        <Text style={styles.bottomSubheading}>Jobs You Saved</Text>
        {/* Render Saved Jobs */}
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
}); 
