import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

function ExperienceModal({ visible, onClose, onSubmit }) {
  // Form state
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDatePicker = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleEndDatePicker = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  // Submit form
  const handleSubmit = () => {
    // onSubmit({ position, company, location, startDate, endDate });
    // onClose();
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modal.centeredView}>
        <View style={styles.modal.modalView}>
          {/* Form fields */}
          <Text style={styles.modal.subheading}>Position Name</Text>
          <TextInput
            style={[
              styles.modal.input,
              { fontFamily: "NunitoSans_400Regular" },
            ]}
            onChangeText={setPosition}
            value={position}
            placeholder="Position Name"
            placeholderStyle={styles.placeholder}
          />

          <Text style={styles.modal.subheading}>Company</Text>
          <TextInput
            style={[
              styles.modal.input,
              { fontFamily: "NunitoSans_400Regular" },
            ]}
            onChangeText={setCompany}
            value={company}
            placeholder="Company"
          />

          <Text style={styles.modal.subheading}>Location</Text>
          <TextInput
            style={[
              styles.modal.input,
              { fontFamily: "NunitoSans_400Regular" },
            ]}
            onChangeText={setLocation}
            value={location}
            placeholder="Location"
          />
          <View style={styles.modal.dateContainer}>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.modal.subheading}>Start Date</Text>
              <TouchableOpacity
                style={[
                  styles.modal.input,
                  { fontFamily: "NunitoSans_400Regular" },
                ]}
                onPress={() => setShowStartDatePicker(true)}
              >
                <Text>{startDate.toLocaleDateString()}</Text>
              </TouchableOpacity>
              {showStartDatePicker && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={handleStartDatePicker}
                />
              )}
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.modal.subheading}>End Date</Text>
              <TouchableOpacity
                style={[
                  styles.modal.input,
                  { fontFamily: "NunitoSans_400Regular" },
                ]}
                onPress={() => setShowEndDatePicker(true)}
              >
                <Text>{endDate.toLocaleDateString()}</Text>
              </TouchableOpacity>
              {showEndDatePicker && (
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display="default"
                  onChange={handleEndDatePicker}
                  maximumDate={startDate} // Set the minimum date to the start date
                />
              )}
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.modal.buttonsContainer}>
            <TouchableOpacity
              style={[styles.modal.button, styles.modal.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.modal.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modal.button, styles.modal.submitButton]}
              onPress={handleSubmit}
            >
              <Text style={styles.modal.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  // ...other styles...
  modal: StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      // backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      width: "80%",
    },
    subheading: {
      fontFamily: "NunitoSans_400Regular",
      fontSize: 12,
      color: "gray",
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: "#E5E5E5",
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
      fontSize: 16,
    },
    placeholder: {
      fontFamily: "NunitoSans_400Regular",
      fontSize: 14,
    },
    dateContainer: {
      flexDirection: "row",
      flexGrow: 1,
      justifyContent: "space-between",
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    cancelButton: {
      backgroundColor: "#CACACA",
    },
    submitButton: {
      backgroundColor: "#2E475D",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontFamily: "NunitoSans_700Bold",
    },
  }),
};

export default ExperienceModal;
