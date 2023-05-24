import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { fetchAppliedJobs } from "../models/appliedJobs";

const AppliedJob = ({ roleName, company, appliedDate, applicationStatus }) => {
  const getStatusStyle = () => {
    switch (applicationStatus) {
      case "Under Review":
        return {
          borderColor: "orange",
          color: "orange",
        };
      case "Declined":
        return {
          borderColor: "red",
          color: "red",
        };
      case "Accepted":
        return {
          borderColor: "green",
          color: "green",
        };
      default:
        return {
          borderColor: "gray",
          color: "gray",
        };
    }
  };

  const statusStyle = getStatusStyle();

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <StatusBar
        animated={true}
        backgroundColor="#2E475D"
        barStyle={"light-content"}
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.roleName}>Role Name</Text>
          <Text style={styles.company}>Company Name</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.appliedDate}>Date</Text>
          <View
            style={[styles.status, { borderColor: statusStyle.borderColor }]}
          >
            <Text
              style={[styles.applicationStatus, { color: statusStyle.color }]}
            >
              {applicationStatus}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAppliedJobs();
      setAppliedJobs(data);
    };

    fetchData();
  }, []);

  if (appliedJobs === undefined) {
    return (
      <View>
        <AppliedJob
          roleName="Role Name"
          company="Company Name"
          appliedDate="15/05/23"
          applicationStatus="Under Review"
        />
      </View>
    );
  }

  // Check if jobPostings is an array before mapping
  if (Array.isArray(appliedJobs)) {
    return (
      <View>
        {appliedJobs.map((job) => (
          <AppliedJob
            key={job.id}
            roleName={job.roleName}
            company={job.company}
            appliedDate={job.appliedDate}
            applicationStatus={job.applicationStatus}
          />
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  topContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
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
  bottomContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  appliedDate: {
    fontSize: 14,
    color: "#ABB5BE",
    marginBottom: 5,
    marginRight: 5,
  },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 50,
  },
  applicationStatus: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
});

export default AppliedJobs;
