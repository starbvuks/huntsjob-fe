import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+86", name: "China" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+81", name: "Japan" },
  { code: "+7", name: "Russia" },
  { code: "+34", name: "Spain" },
  // Add more country codes as needed
];

const CountryCodePicker = () => {
  const [selectedCode, setSelectedCode] = useState("+91");
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedCode(item.code);
        setModalVisible(false);
      }}
      style={styles.listItem}
    >
      <Text style={styles.listItemText}>
        {item.code} - {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerText}>{selectedCode}</Text>
        <Icon name="chevron-down" size={16} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={countryCodes}
            renderItem={renderItem}
            keyExtractor={(item) => item.code}
            ListHeaderComponent={() => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "98%",
                }}
              >
                <Text style={styles.modalSubheading}>Select Country Code</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Icon name="x-circle" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={true}
            indicatorStyle="black"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 8,
  },
  pickerText: {
    fontSize: 16,
    marginRight: 8,
    fontFamily: "NunitoSans_700Bold",
  },
  modalContainer: {
    backgroundColor: "#F6F6F6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
  },
  modalSubheading: {
    fontSize: 18,
    fontFamily: "NunitoSans_700Bold",
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#D0D0D0",
  },
  listItem: {
    paddingVertical: 18,
  },
  listItemText: {
    fontSize: 18,
    fontFamily: "NunitoSans_400Regular",
  },
});

export default CountryCodePicker;
