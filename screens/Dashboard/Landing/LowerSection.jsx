import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import JobPostings from "../../../components/JobPostings";

const LowerSection = () => {

  return (
      <View style={styles.container}>
        <Text style={styles.subheading}>Companies Actively Hiring:</Text>
        <JobPostings />
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FBFBFB",
      height: "100%",
    },
    subheading: {
      fontFamily: "NunitoSans_700Bold",
      alignSelf: "center",
      marginTop: 30,
      fontSize: 20,
    },
  });

export default LowerSection;
