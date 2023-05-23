import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GeneralTabBar = ({ activeTab }) => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.tab}>
        <Text
          style={[
            styles.tabText,
            activeTab === "basicDetails" && styles.activeTabText,
          ]}
        >
          Basic Details
        </Text>
        <View
          style={[
            styles.tabBarIndicator,
            activeTab === "basicDetails" && styles.activeTabBarIndicator,
          ]}
        />
      </View>
      <View style={styles.tab}>
        <Text
          style={[
            styles.tabText,
            activeTab === "experience" && styles.activeTabText,
          ]}
        >
          Experience
        </Text>
        <View
          style={[
            styles.tabBarIndicator,
            activeTab === "experience" && styles.activeTabBarIndicator,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#FF5C35",
  },
  tabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ccc",
  },
  activeTabText: {
    color: "#FF5C35",
  },
  tabBarIndicator: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: "#ccc",
  },
  activeTabBarIndicator: {
    backgroundColor: "#FF5C35",
  },
});

export default GeneralTabBar;
