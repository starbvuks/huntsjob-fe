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

function EducationModal({ visible, onClose, onSubmit }) {
  // Form state
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [institute, setInstitute] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

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
          <Text style={styles.modal.subheading}>Qualification</Text>
          <TextInput
            style={[
              styles.modal.input,
              { fontFamily: "NunitoSans_400Regular" },
            ]}
            onChangeText={setQualification}
            value={qualification}
            placeholder="Qualification"
            placeholderStyle={styles.placeholder}
          />

          <Text style={styles.modal.subheading}>Specialization</Text>
          <TextInput
            style={[
              styles.modal.input,
              { fontFamily: "NunitoSans_400Regular" },
            ]}
            onChangeText={setSpecialization}
            value={specialization}
            placeholder="Specialization"
          />

          <Text style={styles.modal.subheading}>Institute</Text>
          <TextInput
            style={[
              styles.modal.input,
              { fontFamily: "NunitoSans_400Regular" },
            ]}
            onChangeText={setInstitute}
            value={institute}
            placeholder="Institute"
          />
          <View style={styles.modal.dateContainer}>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.modal.subheading}>Passing Date</Text>
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
                  mode="year"
                  display="default"
                  onChange={handleEndDatePicker}
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

export default EducationModal;
