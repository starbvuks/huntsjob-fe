import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import LowerSection from "./LowerSection";

export default function Saved() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Your Profile</Text>
          <Icon
            name="notifications-outline"
            size={30}
            style={{ color: "#FFFFFF" }}
          />
        </View>
      </View>

      <LowerSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E475D",
    top: 0,
    zIndex: 1,
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
});
