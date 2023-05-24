import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { fetchEducation } from "../../models/educationDetails";

function Posting({ qualification, specialization, institute, year }) {
  return (
    <View style={styles.posting.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Text style={styles.posting.qualification}>{qualification}</Text>
        <Text style={styles.posting.year}>{year}</Text>
      </View>
      <Text style={styles.posting.specialization}>{specialization}</Text>
      <Text style={styles.posting.institute}>{institute}</Text>
    </View>
  );
}

function Education({ userId }) {
  const [education, setEducation] = useState(null);
  useEffect(() => {
    async function getEducation() {
      try {
        const data = await fetchEducation(userId);
        setEducation(data);
      } catch (error) {
        console.error(error);
        setEducation(null);
      }
    }
    getEducation();
  }, []);
  if (education === null || education === [] || education === undefined) {
    setEducation([
      {
        id: 1,
        qualification: "Qualification",
        specialization: "Specialization",
        institute: "Institute",
        year: "2022",
      },
    ]);
  }
  return (
    <View style={styles.education.container}>
      {education &&
        education.map((edu) => (
          <Posting
            key={edu.id}
            qualification={edu.qualification}
            specialization={edu.specialization}
            institute={edu.institute}
            year={edu.year}
          />
        ))}
    </View>
  );
}

const styles = {
  posting: StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#E5E5E5",
    },
    institute: {
      fontSize: 14,
      marginTop: 12,
      fontFamily: "NunitoSans_200ExtraLight",
    },
    year: {
      fontSize: 14,
      textAlign: "right",
      fontFamily: "NunitoSans_200ExtraLight",
      marginTop: 5,
    },
    qualification: {
      fontFamily: "NunitoSans_700Bold",
      fontSize: 18,
    },
    specialization: {
      fontSize: 16,
      marginTop: 4,
    },
    divider: {
      height: 1,
      backgroundColor: "#E5E5E5",
      marginTop: 8,
      marginBottom: 8,
    },
  }),
  education: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
  }),
};

export default Education;
