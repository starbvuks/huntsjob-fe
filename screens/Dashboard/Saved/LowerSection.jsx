import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import JobPostings from "../../../components/JobPostings";

const LowerSection = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.subheading}>Jobs you have saved for later</Text>
      <JobPostings />
      <JobPostings />
      <JobPostings />
      <JobPostings />
      <JobPostings />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    minHeight: 600,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
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
