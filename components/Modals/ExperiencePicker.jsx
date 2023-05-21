import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const ExperiencePicker = ({ label, onDateSelected }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [buttonLabel, setButtonLabel] = useState(label);

  const handleConfirm = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
      onDateSelected(date);
      setButtonLabel(`${date.getMonth() + 1}/${date.getFullYear()}`);
    }
  };

  return (
    <View>
      <Text style={styles.buttonSubhead}>{label}</Text>
      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={styles.dateButton}
      >
        <Text style={styles.dateButtonText}>{buttonLabel}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          onChange={handleConfirm}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonSubhead: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
    marginBottom: 5,
  },
  dateButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#FFFFFF",
    color: "black",
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
  },
  dateButtonText: {
    fontFamily: "NunitoSans_800ExtraBold",
  },
});

export default ExperiencePicker;
