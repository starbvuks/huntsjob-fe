import React, { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const DynamicFilter = ({ navigation }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // This is where you fetch data from the backend
    // For now, we use dummy data
    const dummySections = [
      {
        name: "By Location",
        options: [
          { name: "New York", checked: false, matchingPostings: 5 },
          { name: "San Francisco", checked: false, matchingPostings: 8 },
        ],
      },
      {
        name: "Jobs By Experience (Years)",
        options: [
          { name: "1-3 Years", checked: false, matchingPostings: 15 },
          { name: "4-6 Years", checked: false, matchingPostings: 10 },
        ],
      },
      {
        name: "Jobs by Salary (P.A)",
        options: [
          { name: "$40,000 - $60,000", checked: false, matchingPostings: 7 },
          { name: "$60,000 - $80,000", checked: false, matchingPostings: 12 },
        ],
      },
    ];
    setSections(dummySections);
  }, []);

  // Render the filter component
  return (
    <View>
      <View style={styles.header}>
        <Icon
          name={"chevron-back"}
          size={24}
          color="#333"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.subheading}>Filter Results</Text>
      </View>
      {sections.map((section, sectionIndex) => (
        <View key={section.name} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.name}</Text>
          {section.options.map((option, optionIndex) => (
            <View key={option.name} style={styles.option}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Switch
                  value={option.checked}
                  onValueChange={() => {
                    // Update the option's checked status
                    const updatedSections = [...sections];
                    updatedSections[sectionIndex].options[optionIndex].checked =
                      !option.checked;
                    setSections(updatedSections);
                  }}
                />

                <Text style={styles.optionName}>{option.name}</Text>
              </View>
              <Text style={styles.matchingPostings}>
                {option.matchingPostings}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    padding: 10,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 30
  },
  subheading: {
    fontFamily: "NunitoSans_900Black",
    fontSize: 28,
  },
  section: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: "#ccc",
    padding: 10,
    gap: 10,
  },
  sectionTitle: {
    fontFamily: "NunitoSans_800ExtraBold",
    fontSize: 18,
    marginTop: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  optionName: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "NunitoSans_700Bold",
  },
  matchingPostings: {
    fontSize: 16,
    color: "#999",
    marginRight: 3,
  },
});

export default DynamicFilter;
