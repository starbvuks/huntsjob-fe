// src/components/JobPostings.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { fetchJobPostings } from "../models/jobPostings";

const JobPosting = ({
  roleName,
  company,
  location,
  date,
  yearsOfExperience,
  companyLogo,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.roleName}>{roleName}</Text>
          <Text style={styles.company}>{company}</Text>
      <Text style={styles.yearsOfExperience}>{yearsOfExperience}</Text>
        </View>
        <View>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>

      <Image
        source={typeof companyLogo === 'string' ? { uri: companyLogo } : companyLogo}
        style={styles.companyLogo}
        />
      <Icon name="arrow-right" size={24} style={styles.arrow} />
        </View>
    </View>
  );
};

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);
  console.log(jobPostings);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobPostings();
      setJobPostings(data);
    };

    fetchData();
  }, []);

  if (jobPostings === undefined) {
    return (
      <View>
        <JobPosting
          roleName="Role Name"
          company="Company Name"
          location="Location"
          date="Date"
          yearsOfExperience="Years of Experience"
          companyLogo={require("../assets/huntsjob-logo.png")}
        />
      </View>
    );
  }

  // Check if jobPostings is an array before mapping
  if (Array.isArray(jobPostings)) {
    return (
      <View>
        {jobPostings.map((job) => (
          <JobPosting
            key={job.id}
            roleName={job.roleName}
            company={job.company}
            location={job.location}
            date={job.date}
            yearsOfExperience={job.yearsOfExperience}
            companyLogo={job.companyLogo}
          />
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 20,
    marginBottom: 10,
    marginVertical: 30,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    shadowColor: "#EAF0F6",
    shadowOpacity: 8,
    shadowRadius: 10,
  },
  topContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companyLogo: {
    alignSelf: "flex-start",
    maxHeight: 70,
    maxWidth: 200,
    marginLeft: 5,
    marginTop: 30,
    marginBottom: 10,
  },
  roleName: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  company: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#ABB5BE",
    marginBottom: 5,
    textAlign: "right",
  },
  date: {
    fontSize: 12,
    color: "#ABB5BE",
    marginBottom: 5,
    textAlign: "right",
  },
  yearsOfExperience: {
    fontSize: 14,
    color: "#555",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: '90%',
    justifyContent: "space-between"
  },
  arrow: {
    paddingTop: 15,
    color: "#FF5C35"
  }
});

export default JobPostings;
