import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { fetchExperience } from "../../models/experienceDetails";

function Posting({ title, company, date, location }) {
  return (
    <View style={styles.posting.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Text style={styles.posting.title}>{title}</Text>
        <Text style={styles.posting.date}>{date}</Text>
      </View>
      <Text style={styles.posting.company}>{company}</Text>
      <Text style={styles.posting.location}>
        <Icon name="map-pin" size={14} /> {location}
      </Text>
    </View>
  );
}

function Experience({ userId, isEditMode }) {
  const [experience, setExperience] = useState(null);
  useEffect(() => {
    async function getExperience() {
      try {
        const data = await fetchExperience(userId);
        setExperience(data);
      } catch (error) {
        console.error(error);
        setExperience(null);
      }
    }
    getExperience();
  }, []);
  if (experience === null || experience === [] || experience === undefined) {
    // Render a loading indicator or return null
    setExperience([
      {
        id: 1,
        companyName: "Company",
        location: "Location",
        position: "Position Name",
        startDate: "Jan 2020",
        endDate: "Present",
      },
    ]);
  }
  return (
    <View style={styles.experience.container}>
      {experience &&
        experience.map((exp) => (
          <Posting
            key={exp.id}
            title={exp.position}
            company={exp.companyName}
            date={`${exp.startDate} - ${exp.endDate}`}
            location={exp.location}
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
    title: {
      fontFamily: "NunitoSans_700Bold",
      fontSize: 18,
    },
    company: {
      fontSize: 16,
      fontFamily: "NunitoSans_400Regular",
    },
    date: {
      fontSize: 12,
      textAlign: "right",
      fontFamily: "NunitoSans_200ExtraLight",
      marginTop: 5,
    },
    location: {
      fontSize: 14,
      marginTop: 12,
      fontFamily: "NunitoSans_200ExtraLight",
    },
    description: {
      fontSize: 16,
      marginTop: 8,
    },
    divider: {
      height: 1,
      backgroundColor: "#E5E5E5",
      marginTop: 8,
      marginBottom: 8,
    },
  }),
  experience: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
  }),
};

export default Experience;
