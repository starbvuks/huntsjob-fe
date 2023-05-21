import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ExperiencePicker = ({ title, onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onStartDateChange(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onEndDateChange(date);
  };

  return (
    <View>
      <Text style={styles.subheading}>{title}</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity
          onPress={() => showPicker("startDate", handleStartDateChange)}
          style={styles.dateButton}
        >
          <Text style={styles.dateButtonText}>
            {startDate ? startDate.toDateString() : "Start Date"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => showPicker("endDate", handleEndDateChange)}
          style={styles.dateButton}
        >
          <Text style={styles.dateButtonText}>
            {endDate ? endDate.toDateString() : "End Date"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styles ...
});

export default ExperiencePicker;
