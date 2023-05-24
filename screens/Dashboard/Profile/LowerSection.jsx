import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ProfilePicture from "../../../components/ProfilePicture";

const LowerSection = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture />
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
    marginVertical: 30,
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    marginTop: 30,
    marginHorizontal: 40,
    fontSize: 14,
    letterSpacing: 0.1,
    textAlign: "center",
  },
});

export default LowerSection;
